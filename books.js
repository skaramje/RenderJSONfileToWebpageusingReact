function Book({data, id}){
    
    return (
   
        <div className="card" 
        id={id}
        onClick={(event)=>{
            console.log(`clicked on ${id}`);
        }}
        >
            <h5 className="card-header">Book ({id})  {data.title}</h5>
            <div className="card-body">
              <h5>{data.subtitle}</h5>
                  
                  <table className="table">
                      <tbody>
                      <tr>
                          <td className="text-success fw-bold">Title:</td>
                          <td>{data.title}</td>
                      </tr>
                      <tr>
                          <td className="text-success fw-bold">Subtitle:</td>
                          <td>{data.subtitle}</td>
                      </tr>
                      <tr>
                          <td className="text-success fw-bold">Author:</td>
                          <td>{data.author}</td>
                      </tr>
                      <tr>
                          <td className="text-success fw-bold">Publisher:</td>
                          <td>{data.publisher}</td>
                      </tr>
                      <tr>
                          <td className="text-success fw-bold">Description:</td>
                          <td>{data.description}</td>
                      </tr>
                      </tbody>
                  </table>
                  
            </div>
        </div>
    )
}
