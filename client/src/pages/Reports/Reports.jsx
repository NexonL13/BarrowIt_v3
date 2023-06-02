import Statistics from '../../components/Reports/Statistics/Statistics'
import Assets from '../../components/Reports/Charts/Assets/Assets'
import SocialTraffic from '../../components/Reports/SocialTraffic/SocialTraffic'
import Users from '../../components/Reports/Users/Users'

const Reports = () => {
    return (
      <>
      <Statistics />
      <Assets />
      <div className="flex mt-10 pb-5">
      <SocialTraffic />
      <Users />
      </div>
      </>
    )
  }
  
  export default Reports