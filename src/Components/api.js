import React , {useEffect, useState} from 'react'
import Request from 'axios'

const Api = ()=>{
    useEffect(getdata,[])
    async function getdata(){
        let res = await Request.get("http://localhost:5200/Details")
        tableData = res.data.map(x=>(
            <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.city}</td>
                <td><button className='btn btn-danger' value={x.id} onClick={deleteData}>Delete</button></td>
            </tr>
        ))
        setTableData(tableData);
    }

    async function deleteData(e){
        let toDelId = e.target.value
        let result = window.confirm('do you want to delete?')
        if(result){
            try {
                let resp = await Request.delete("http://localhost:5200/Details/"+toDelId)
                getdata();
            }
            catch(err){
                console.log(err.message);
            }
        }
    }

    async function updateData(e){
        let obj = {
            id : id,
            name : name,
            city : city
        }
        console.log(obj);
        let result = window.confirm('do you want to update?')
        if(result){
            try {
                let resp = await Request.put("http://localhost:5200/Details/"+obj.id,obj)
                getdata();
            }
            catch(err){
                console.log(err.message);
            }
        }
    }

    async function postData(){
        let obj = {
            id : id,
            name : name,
            city : city
        }
        console.log(obj);
        try{
            let res = await Request.post("http://localhost:5200/Details",obj)
            getdata();
        }
        catch(e){
            console.log(e.message);
        }
    }

    let [tableData,setTableData] = useState("")
    let [id,setId] = useState()
    let [name,setName] = useState()
    let [city,setCity] = useState()
    return(
    <div>
        <table className="table table-bordered table-dark" style={{width:'500px',margin:'40px 40px 80px 80px'}}>
           <thead></thead>
           <tbody>
           <tr>
                <td><b>Enter Id</b></td>
                <td><input type="text" onChange={(e)=>setId(e.target.value)} value={id} /></td>
            </tr>
            <tr>
                <td><b>Enter Name</b></td>
                <td><input type="text" onChange={(e)=>setName(e.target.value)} value={name}/></td>
            </tr>
            <tr>
            <   td><b>Enter City</b></td>
                <td><input type="text" onChange={(e)=>setCity(e.target.value)} value={city}/></td>
            </tr>
            <tr>
                <td style={{textAlign:'center'}}>
                    <button className='btn btn-primary' onClick={postData}>Post</button>
                </td>
                <td style={{textAlign:'center'}}>
                    <button className='btn btn-primary' onClick={updateData}>Update</button>
                </td>
            </tr>
           </tbody>
        </table>
        <table className="table table-bordered" style={{width:'600px',margin:'40px 40px 80px 80px'}}>
            <thead>
                <tr className='text text-danger'>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Region</td>
                    <td></td>
                </tr>
            </thead>
            <tbody className='text text-primary'>
                {tableData}
            </tbody>
        </table>
    </div>
    )
}

export default Api