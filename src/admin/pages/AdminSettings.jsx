import AdminHeader from "../components/AdminHeader";
import AppFooter from "../../components/AppFooter";
import AdminSidebar from "../components/AdminSidebar";
import { Button, Card, Textarea, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { adminprofileedit, viewactiveuser } from "../../Services/allAPIs";
import { serverURL } from "../../Services/serverURL";

function AdminSettings() {
  const [token, setToken] = useState("");
  const [adminData, setAdminData] = useState([]);
  const [preview, setPreview] = useState([]);
  const [oldpassword, setOldpassword] = useState("");
  const [newpass, setNewpass] = useState(false);
  const [edit, setEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);

  console.log(edit);
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  console.log(token);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
  }, [refresh]);

  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };
  console.log(reqHeader);

  const admindata = async () => {
    const response = await viewactiveuser(reqHeader);
    console.log(response);

    if (response.status == 200) {
      setAdminData(response.data.userdata);
    }
  };

  useEffect(() => {
    admindata();
  }, [token]);

  console.log(adminData);

  const handleimageupload = async (e) => {
    console.log(e.target.files);
    let image = adminData.profile;
    image = e.target.files[0];

    console.log(image);

    setAdminData({ ...adminData, profile: image });
    console.log(adminData);

    const url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPreview(url);
  };

  const handlepasswordcheck = async () => {
    console.log(oldpassword);
    if (oldpassword === adminData.password) {
      setNewpass(true);
    } else {
      console.log("password missmatch");
    }
  };

  const handleUpdate = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    console.log(reqHeader);

    const reqbody = new FormData();
    for (let key in adminData) {
      reqbody.append(key, adminData[key]);
    }
    const response = await adminprofileedit(reqbody, reqHeader);
    console.log(response);
    if (response.status == 200) {
      setRefresh(true);
      alert("updated");
    }
  };

  const reset = () => {
    admindata();
  };

  return (
    <>
      <AdminHeader />
      {/* settings page */}
      <div className="flex justify-start  ">
        {/* side bar */}
        <div>
          <AdminSidebar />
        </div>
        {/* contained */}
        <div style={{ width: "100%" }}>
          <h3
            className="text-center font-bold italic text-3xl flex justify-center items-center text-white"
            style={{
              width: "100% ",
              backgroundImage: `url('https://i.pinimg.com/1200x/8d/c2/f0/8dc2f090577b59234560a901e4f05c8c.jpg')`,
              height: "250px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              // borderRadius:'50px'
              boxShadow: "4px 4px 8px black",
            }}
          >
            Settings
          </h3>

          <div
            className="mt-10 flex justify-between gap-4 mb-10 "
            style={{ width: "100%" }}
          >
            {/* content */}
            <div
              className="flex flex-col justify-center"
              style={{ width: "40%" }}
            >
              {!edit ? (
                <p
                  className="leading-relaxed text-1xl italic"
                  onClick={() => setEdit(true)}
                >
                  {adminData.bio}
                </p>
              ) : (
                <Textarea
                  onChange={(e) =>
                    setAdminData({
                      ...adminData,
                      bio: e.target.value,
                    })
                  }
                  placeholder={adminData.bio}
                  value={adminData.bio}
                ></Textarea>
              )}
            </div>
            {/* edit page */}
            <Card className="text-center p-5" style={{ width: "50%" }}>
              {/* admin image */}
              <div className="text-center">
                <div className="flex justify-center flex-col">
                  <label htmlFor="image">
                    <TextInput
                      id="image"
                      type="file"
                      hidden
                      onChange={(e) => handleimageupload(e)}
                    ></TextInput>
                    <img
                      src={
                        preview && preview.length > 0
                          ? preview
                          : `${serverURL}/uploads/${adminData.profile}`
                      }
                      id="image"
                      alt=""
                      className="w-40 h-40 rounded-full object-cover"
                    />
                    <div id="image" className="mt-[-25px] ml-[100px] w-4 ">
                      <MdEdit size={"30px"} />
                    </div>
                  </label>
                </div>
                {/* edit box */}
                <div className="mt-10">
                  {!edit ? (
                    <p
                      className="mb-4 border-2 border-gray-300 rounded p-1  bg-gray-100"
                      onClick={() => setEdit(true)}
                      placeholder="name"
                    >
                      {adminData.username}
                    </p>
                  ) : (
                    <TextInput
                      className="mb-4"
                      value={adminData.username}
                      placeholder={adminData.username}
                      onChange={(e) =>
                        setAdminData({
                          ...adminData,
                          username: e.target.value,
                        })
                      }
                    ></TextInput>
                  )}

                  {!newpass ? (
                    <div>
                      <TextInput
                        className="mb-4"
                        placeholder="Current password"
                        onChange={(e) => {
                          setOldpassword(e.target.value);
                        }}
                      ></TextInput>
                      <div className="flex justify-center">
                        <Button onClick={handlepasswordcheck}> verify</Button>
                      </div>
                    </div>
                  ) : (
                    <TextInput
                      className="mb-4"
                      placeholder="New password"
                      onChange={(e) =>
                        setAdminData({
                          ...adminData,
                          password: e.target.value,
                        })
                      }
                    ></TextInput>
                  )}
                </div>
              </div>
              <div className="flex justify-center gap-5 w-full">
                <Button className="w-full bg-orange-500" onClick={reset}>
                  Reset
                </Button>
                <Button className="w-full bg-green-500" onClick={handleUpdate}>
                  Update
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <AppFooter />
    </>
  );
}

export default AdminSettings;
