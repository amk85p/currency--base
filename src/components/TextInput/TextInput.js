import styles from './TextInput.module.scss';

const TextInput = (props) => {
  return (
    <input
      {...props}
      data-testid='amount'
      className={styles.input}
      type='text'
    />
  );
};

export default TextInput;
