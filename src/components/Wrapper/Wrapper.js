import css from './Wrapper.module.css'
const Wrapper = ({ children }) => {
    return (
        <>
            <section className={css.Wrapper}>
                {children}
            </section>
        </>
    )
};
export default Wrapper;
