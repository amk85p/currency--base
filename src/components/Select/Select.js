import styles from './Select.module.scss';

const Select = ({ props, children, onChange, ...rest }) => {
  return (
    <select
      data-testid={props}
      onChange={onChange}
      className={styles.select}
      {...rest}
    >
      {children}
    </select>
  );
};

export default Select;
