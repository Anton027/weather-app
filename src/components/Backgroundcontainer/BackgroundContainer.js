import css from './BackgroundContainer.module.css'
const BackgroundContainer = ({ children }) => {
    return (
        <>
            <div className={css.BgrContainer}>
                {children}
            </div>
        </>
    )
}

export default BackgroundContainer;