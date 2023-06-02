import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { GoPackage } from "react-icons/go"
import { HiOutlineUsers } from "react-icons/hi"
import {FaServer } from "react-icons/fa"

const stats = [
    { id: 1, name: 'Total Assets', stat: '1000', icon: GoPackage, change: '122', changeType: 'decrease' },
    { id: 2, name: 'Total Users', stat: '600', icon: HiOutlineUsers, change: '5.4%', changeType: 'increase' },
    { id: 4, name: 'Server Uptime', stat: '152 days', icon: FaServer},
  ]
  
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

const Statistics = () => {
  return (
    <div className='flex flex-wrap space-y-5 mb-7 mx-auto'>
      <h3 className="text-xl font-medium leading-6 text-gray-900">General Reports</h3>

      <dl className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-orange-400 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                  {item.changeType === 'increase' && <AiOutlineArrowUp className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />}
                  {item.changeType === 'decrease' && <AiOutlineArrowDown className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-green-700 hover:text-green-500">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Statistics