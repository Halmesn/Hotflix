/**
 * Return props for authForm input element.
 *
 * @function getInputProps
 *
 * @example
 * <Input {...getInputProps('email', enteredEmail, setError)}/>
 *
 * @param {input} string type of input element.
 * @param {enteredValue} string input value
 * @param {errorFunc} function a function to update error massage state.
 */

export const getInputProps = (input, enteredValue, errorFunc) => {
  switch (input) {
    case 'email':
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

    case 'password':
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

/**
 * Return text children for authForm title.
 *
 * @function getDisplayText
 *
 * @example
 * <SubTitle>{getDisplayText(mode, 'subtitle')}</SubTitle>
 * <SubTitle>{getDisplayText(mode, 'switch')}now.</SubTitle>
 *
 * @param {mode} string state of authForm, could be 'signin' or 'signup'.
 * @param {forElement} string 3 use cases(subtitle,switch and option) on different authForm elements.
 */

export function getDisplayText(mode, forElement) {
  switch (forElement) {
    case 'subtitle':
      return mode === 'signin' ? 'New to Hotflix? ' : 'Already a user? ';

    case 'switch':
      return mode === 'signin' ? 'Sign up' : 'Sign in';

    case 'option':
      return mode === 'signin'
        ? 'Or sign in with'
        : "Don't want to be bothered?";

    default:
      return mode === 'signin' ? 'Sign in' : 'Sign up';
  }
}
