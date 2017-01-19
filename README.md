# Password Generator
A javascript password generator with easy to define rules to suit any business case.

## Adding rules to the generation
- Open the password.js inside the /js/ folder
- Edit the 'rules' array by adding another object, by default there is 2 rules setup as examples
- If a callback function is set within the rule, the resulting string will be passed to the callback for further processing. As in the example rules, this is a good place to do any custom operations to the password, such as shuffling the final password string.
