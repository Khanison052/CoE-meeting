import axios from 'axios'
import { AuthProviderProps } from 'react-oidc-context'
import { User } from 'oidc-client-ts'

const isProd = !(!process.env.NODE_ENV || process.env.NODE_ENV === 'development')

export const oidcConfig: AuthProviderProps = {
    authority: 'http://localhost:8888/realms/master',
    client_id: 'pann',
    client_secret: 'opo8llBGO9nyI4IkbVMsKAUXcHNsT7iC',
    scope: 'openid profile offline_access',
    redirect_uri: 'http://localhost:3000',
    monitorSession: true
}

export const ax = axios.create({
    baseURL: 'http://localhost:8000'
})

ax.interceptors.request.use(
    config => {
        const oidcStorage = sessionStorage.getItem(`oidc.user:${oidcConfig.authority}:${oidcConfig.client_id}`)
        if(config.headers && oidcStorage){
            const user = User.fromStorageString(oidcStorage)
            config.headers['Authorization'] = `Bearer ${user.access_token}`;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

const config = {
    isProd,
    remoteRepositoryUrlPrefix: isProd ? 'https://s08x.coe.psu.ac.th/api' : 'http://localhost:1337/api',
}

export default config