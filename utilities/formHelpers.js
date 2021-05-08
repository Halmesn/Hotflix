export const getInputProps = (input, enteredValue, errorFunc) => {
  if (input === 'email') {
    return {
      type: 'email',
      id: 'email',
      autoComplete: 'email',
      minLength: '5',
      required: 'required',
      value: enteredValue,
      onFocus: function () {
        errorFunc(null);
      },
    };
  }
  if (input === 'password') {
    return {
      type: 'password',
      id: 'password',
      minLength: '4',
      required: 'required',
      value: enteredValue,
      onFocus: function () {
        errorFunc(null);
      },
    };
  }
};

export function getDisplayText(mode, forElement) {
  if (forElement === 'subtitle') {
    return mode === 'signin' ? 'New to Nextflix? ' : 'Already a user? ';
  }
  if (forElement === 'switch') {
    return mode === 'signin' ? 'Sign up' : 'Sign in';
  }
  if (forElement === 'option') {
    return mode === 'signin' ? 'Or sign in with' : "Don't want to be bothered?";
  }
  return mode === 'signin' ? 'Sign in' : 'Sign up';
}
