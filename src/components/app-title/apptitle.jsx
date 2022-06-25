import './apptitle.css';


const AppTitle = () => {
    return (
        <div className={styles.root}>
            <h1 className="main-title">Let's save our world &nbsp;<span style={{ borderBottom: '1px solid white' }}>together</span></h1>
            <h2 className="secondary-title">Help give Earth a breath of fresh air</h2>
        </div>
    )
}

export default AppTitle;