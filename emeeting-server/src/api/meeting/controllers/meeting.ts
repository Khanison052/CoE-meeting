/**
 * meeting controller
 */
import { factories } from '@strapi/strapi'
import { parseMultipartData } from '@strapi/utils'
export default factories.createCoreController('api::meeting.meeting', ({ strapi }) => ({
    async update(ctx) {
        const entityId = ctx.params.id;
        let entity;
        const book = await strapi.entityService.findOne('api::meeting.meeting', entityId, {
            populate: { Notice: true },
        });

        if (!book) {
            return ctx.notFoud('Not Found');
        }

        if (book.owner?.id !== ctx.state.user.id) {
            return ctx.unauthorized("You can't update this extry");
        }

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.entityService.update('api::meeting.meeting', entity, { data }, { files });
        }else {
            entity = await strapi.entityService.update('api::meeting.meeting', entityId, ctx.request.body);

        }
        const sanitizedEntity = await this.sanitizedOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },

}));
