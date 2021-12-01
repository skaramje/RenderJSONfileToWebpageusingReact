function App(){
    const [data, setData] = React.useState(null);
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(()=>{
        async function getdata(){
            const response = await fetch('./books.json');
            const json = await response.json();
            setData(json);
            setLoaded(true);
        }
        getdata();
    }, []);
    console.log('loaded: ', loaded, 'data: ', data);

    return(<>
    <div className="container"
    
    >
        <h1>React Components</h1>
        {loaded && data.books.map((book, i)=> <Book 
        data={book} 
        id={i} 
        key={i} 
        />)}
    </div>
       
    </>);
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)