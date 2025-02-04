export default function Option({onselect,options}:{
    onselect:(value:string)=>void,  
    options:{
        key:string,
        value:string
    }[],
}){
    return(
        <div className="">
<select className="w-[450px] px-4 py-2 border mr-1 " onChange={(e)=>{
    onselect(e.target.value)
}}>
{options.map(option=><option value={option.key} key={option.key} >{option.value}</option>)}
</select>
        </div>
    )
}