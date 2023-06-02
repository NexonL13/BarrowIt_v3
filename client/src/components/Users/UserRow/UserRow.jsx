import React from 'react'
import { Link } from 'react-router-dom'

const UserRow = ({person}) => {
  const imageProfile = `https://i.pravatar.cc/150?img=${person.id}`
  return <tr key={person.email}>
  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
    <div className="flex items-center">
      <div className="h-10 w-10 flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={imageProfile} alt="profileimg" />
      </div>
      <div className="ml-4">
        <div className="font-medium text-gray-900">{`${person.firstName} ${person.middleName} ${person.lastName}`}</div>
        <div className="text-gray-500">{person.email}</div>
      </div>
    </div>
  </td>
  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
      Active
    </span>
  </td>
  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.position}</td>
  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
    <Link className="text-green-600 hover:text-green-900">
      Edit<span className="sr-only">, ${person.firstName} ${person.middleName} ${person.lastName}</span>
    </Link>
  </td>
</tr>
}

export default UserRow