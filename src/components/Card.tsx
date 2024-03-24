const Card =  (props: { title: string ,name:string,price:string, discount:string})=> {
    return <div className="mx-auto" >
        
<a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
            alt=""
            src= {props.title}
            className="h-36 w-full rounded-md object-cover"
        />
        <div className="mt-2">
            <dl>
                 <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="font-medium">{props.name}</dd>
                </div>
                <div className="flex  ">
                    <dt className="sr-only">Price</dt>
                    <dd className=" text-base text-gray-500 ">{props.price} </dd>
                    <dd className="text-small text-gray-500 ml-1 line-through">{props.discount} </dd>
                </div>
               
            </dl>
            
        </div>
    </a>

    </div>
    
}

export default Card