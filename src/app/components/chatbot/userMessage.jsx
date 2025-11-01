export default function UserMessage({message}){
    return <div className="w-full flex justify-end">
            <p className="text-end m-2 p-2 bg-blue-500 rounded w-fit max-w-[80%]">{message}</p>
        </div>
}