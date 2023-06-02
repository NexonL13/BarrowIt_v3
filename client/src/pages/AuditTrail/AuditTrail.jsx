import useFetch from '../../hooks/useFetch'
const AuditTrail = () => {
  const {data: auditTrail} = useFetch('http://localhost:3000/api/v1/audit')
  

  return (
    <div className="overflow-x-auto">
      <div>
      <h1 className="text-xl font-medium py-5">Audit Trails</h1>
    </div>
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Actor</th> 
        <th>Role</th> 
        <th>Description</th> 
        <th>Timestamp</th>
      </tr>
    </thead> 
    <tbody>
      {auditTrail?.map(trail => (
        <tr key={trail.id}>
        <th>{trail.id}</th> 
        <td>{trail.actor}</td> 
        <td><span className='font-medium badge badge-xs badge-accent text-white'>{trail.role}</span></td>
        <td>{trail.description}</td> 
        <td>{trail.createdAt}</td> 
      </tr>
      ))}
    </tbody>
    {auditTrail >= 5 &&
    <tfoot>
      <tr>
        <th></th> 
        <th>Actor</th> 
        <th>Role</th> 
        <th>Description</th> 
        <th>Timestamp</th> 
      </tr>
    </tfoot>
   }
  </table>
</div>
  )
}

export default AuditTrail