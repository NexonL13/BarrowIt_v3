import { FiSettings } from "react-icons/fi"
import useFetch from "../../hooks/useFetch"

const ProfileCard = () => {
  const { data: admin } = useFetch("http://localhost:3000/api/v1/auth/current")

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-1/3 mt-10 rounded-lg border">
        <div className="flex items-center justify-center pt-10 flex-col">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            className="rounded-full w-32"
          />
          <h1 className="text-gray-800 font-semibold text-xl mt-5">{`${admin?.firstName} ${admin?.lastName}`}</h1>
          <h1 className="text-gray-500 text-sm">
            Barangay 171 Bagumbong, Caloocan City
          </h1>
          <h1 className="text-gray-500 text-sm p-4 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            iusto cupiditate facere repudiandae sint sed libero veniam
            necessitatibus quod reiciendis.
          </h1>
        </div>
        <div className="flex justify-between p-4">
          <div>
            <h1 className="text-xs uppercase text-gray-500">{admin?.role}</h1>
            <h1 className="text-xs text-orange-700">{admin?.email}</h1>
          </div>
          <div>
            <button className="text-2xl border-none">
              <FiSettings />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3 mb-6 flex-col">
          <h1 className="text-xs text-gray-500">Get Connected</h1>
          <div className="flex mt-2">
            <img
              src="https://www.iconsdb.com/icons/preview/gray/facebook-xxl.png"
              alt=""
              className="w-6 border-2 p-1 rounded-full mr-3"
            />
            <img
              src="https://www.iconsdb.com/icons/preview/gray/twitter-xxl.png"
              alt=""
              className="w-6 border-2 p-1 rounded-full mr-3"
            />
            <img
              src="https://www.iconsdb.com/icons/preview/gray/google-plus-xxl.png"
              alt=""
              className="w-6 border-2 p-1 rounded-full mr-3"
            />
            <img
              src="https://www.iconsdb.com/icons/preview/gray/instagram-6-xxl.png"
              alt=""
              className="w-6 border-2 p-1 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
