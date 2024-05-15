import Bubble from '../../components/Icons/Bubble'

export default function Notification () {
    return (
        <div className="flex max-w-sm my-0 mx-auto p-6 rounded-lg bg-white shadow-xl items-center">
        <div className="flex-shrink-0">
          <picture className="w-12 h-12">
            <Bubble />  
          </picture>
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-xl font-medium text-black ">ChitChat</h4>
          <p className="text-gray-500">Escribe un nuevo Mensaje!</p>
        </div>
      </div>        
    )
}