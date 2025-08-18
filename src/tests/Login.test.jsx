import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login';
 
// Using "if" to read more like natural English sentences

it("sign in button disabled", () => {
    const submit = jest.fn(); 
    render(<Login submit={submit} />);

    const signinButton = screen.getByRole('button', {name: /sign in/i});
    expect(signinButton).toBeDisabled(); 
});

it("should sign in with input and enabled button", () => {
    const submit = jest.fn();
    render(<Login submit={submit} />);
    
    const usernameInput = screen.getByRole('textbox', {name: /username/i});
    const passwordInput = screen.getByLabelText(/password/i);
    const signinButton = screen.getByRole('button', {name: /sign in/i});

    // Verify that th button is disabeled
    expect(signinButton).toBeDisabled(); 

    // Populate input fields
    userEvent.type(usernameInput, "john doe1092");
    userEvent.type(passwordInput, "securepassword");
    
    expect(signinButton).toBeEnabled(); 
    
    // Click the button and verify submit is called
    userEvent.click(signinButton);

    expect(submit).toHaveBeenCalledWith({
        username: "john doe1092",
        password: "securepassword"
    });
});

it("should have login headers", () => {
    const submit = jest.fn(); 
    render(<Login submit={submit} />);


    // Verify the text and header levels 
    expect(
        screen.getByRole('heading', {name: /sign in/i})
    ).toBeInTheDocument();

    expect(
        screen.getByRole('heading', {name: /to continue to tdd/i})
    ).toBeInTheDocument();
});

it("should have username, password, password field, and login button", () => {
    const submit = jest.fn();
    render(<Login submit={submit} />);

    // Labels and inputs
    const usernameLabel = screen.getByLabelText(/username/i);
    const usernameInput = screen.getByRole('textbox', {name: /username/i});
    const usernamePlaceholder = screen.getByPlaceholderText(/goku123/i);

    const passwordLabel = screen.getByLabelText(/password/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const passwordPlaceholder = screen.getByPlaceholderText(/password/i);

    // Sign in button
    const signinButton = screen.getByRole('button', {name: /sign in/i});

    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(usernamePlaceholder).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(passwordPlaceholder).toBeInTheDocument();
    expect(signinButton).toBeInTheDocument();
});