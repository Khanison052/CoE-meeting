import { render, screen } from '@testing-library/react';
import exp from 'constants';
import { BrowserRouter } from 'react-router-dom';
import Login from "./login"

describe('Login page', () => {
    it('should display "CoE E-meeting"', () => {
        render(
            <BrowserRouter>
                <Login></Login>
            </BrowserRouter>
        );
        expect(screen.getByText('CoE E-meeting')).toBeInTheDocument();
    })

    it('should display "เข้าสู่ระบบ"', () => {
        render(
            <BrowserRouter>
                <Login></Login>
            </BrowserRouter>
        );
        expect(screen.getByText('เข้าสู่ระบบ')).toBeInTheDocument();
    })
})
