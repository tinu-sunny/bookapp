import Header from "../components/Header";
import { Button, Card, Textarea, TextInput } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import EditProfile from "../components/EditProfile";
import { useEffect, useState } from "react";
import { addBook } from "../../Services/allAPIs";
function Profile() {
  const [token, setToken] = useState("");
  const [activeUser, setActiveUser] = useState({});
  const [bookdata, setBookdata] = useState({
    title: "",
    author: "",
    noofpages: "",
    price: "",
    dprice: "",
    abstract: "",
    publisher: "",
    isbn: "",
    category: "",
    language: "",
    imageUrl: "",
    UploadedImages: [],
  });

  const [preview, setPreview] = useState("");
  const [previewlist, setPreviewlist] = useState([]);

  console.log(bookdata);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
  console.log(token);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setActiveUser(JSON.parse(storedUser));
    }
  }, []);

  const handleimageupload = async (e) => {
    console.log(e.target.files);
    let imageArray = bookdata.UploadedImages;
    if (imageArray.length < 3) {
      imageArray.push(e.target.files[0]);
      console.log(imageArray);

      setBookdata({ ...bookdata, UploadedImages: imageArray });
      const url = URL.createObjectURL(e.target.files[0]);
      console.log(url);
      setPreview(url);

      const urllist = previewlist;

      urllist.push(url);
      console.log(urllist);
      setPreviewlist(urllist);
    } else {
      alert("max 3 files only");
    }
  };

  const addbookuser = async () => {
    console.log(bookdata);
    const {
      title,
      author,
      noofpages,
      price,
      dprice,
      abstract,
      publisher,
      isbn,
      category,
      language,
      imageUrl,
      UploadedImages,
    } = bookdata;
    try {
      // header
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      console.log(reqHeader);

      // body
      const reqBody = new FormData();

      // reqBody.append("title",title)

      for (let key in bookdata) {
        if (key != "UploadedImages") {
          reqBody.append(key, bookdata[key]);
        } else {
          bookdata.UploadedImages.forEach((item) =>
            // console.log(item)
            reqBody.append("UploadedImages", item)
          );
        }
      }

      // api

      const response = await addBook(reqBody, reqHeader);
      console.log(response);
      if (response.status == 200) {
        alert(response.data.message);
      } else {
        alert(response.response.data);
      }
    } catch (err) {
      console.log("error", err);
    }

   
  };

  return (
    <>
      <Header />

      <div
        className=" w-full h-60"
        style={{
          backgroundColor: "rgba(237, 126, 15, 0.67)",
          backgroundImage: `url('https://i.pinimg.com/736x/c6/ed/83/c6ed83e876272895a3b5c15f094210b9.jpg')`,
        }}
      >
        {/* Top Background */}
      </div>

      {/* profile pic */}

      <div className="ml-10" style={{ marginTop: "-100px" }}>
        <img
          src={activeUser.profile}
          alt=""
          className="w-50 h-50 rounded-full object-cover shadow-md mb-4"
        />
      </div>

      {/* details of users */}

      <div className=" ml-20 mr-20">
        <div className="flex justify-between  p-5 ">
          <h4 className="mb-5 font-bold text-2xl "> {activeUser.username}</h4>
          <EditProfile />
        </div>
        <hr className="mb-5" />
        <p className=" leading-relaxed ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          officia possimus voluptatem quisquam vitae iste non recusandae,
          voluptates laborum voluptate doloribus soluta est sapiente, ullam
          nesciunt fuga a officiis nihil? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Recusandae similique laboriosam deserunt
          accusamus quidem rerum voluptatibus provident maiores optio aut
          inventore, dolorem eius. Deserunt ex quos recusandae nam, accusamus
          placeat?
        </p>
      </div>

      {/* tabs */}

      <div
        className="items-center justify-center flex m-10 "
        style={{ width: "100%" }}
      >
        <Tabs aria-label="Default tabs" variant="default">
          {/* Sell Book */}
          <TabItem active title="Sell Book">
            <div className="mt-9">
              <Card
                className="mt-2 p-5"
                style={{ backgroundColor: "#65606017", width: "900px" }}
              >
                <h3 className="text-center p-8 font-bold">Book Details</h3>
                <div className="flex items-center justify-center gap-6">
                  <div className="w-100 " style={{ marginTop: "-20px" }}>
                    <TextInput
                      placeholder="Title"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, title: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="Author"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, author: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="noofpages"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, noofpages: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="imageUrl"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, imageUrl: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="price"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, price: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="dprice"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, dprice: e.target.value })
                      }
                    ></TextInput>
                    <Textarea
                      placeholder="abstract"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, abstract: e.target.value })
                      }
                    >
                      {" "}
                    </Textarea>
                  </div>

                  <div className="w-100">
                    <TextInput
                      placeholder="publisher"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, publisher: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="language"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, language: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="isbn"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, isbn: e.target.value })
                      }
                    ></TextInput>
                    <TextInput
                      placeholder="category"
                      className="mb-2"
                      onChange={(e) =>
                        setBookdata({ ...bookdata, category: e.target.value })
                      }
                    ></TextInput>
                    {preview ? (
                      <div className="w-full flex flex-col gap-3">
                        {previewlist.length < 3 ? (
                          <input
                            type="file"
                            id="image"
                            name="image"
                            hidden
                            multiple
                            accept="image/*"
                            onChange={handleimageupload}
                          />
                        ) : (
                          ""
                        )}

                        <label htmlFor="image" className="cursor-pointer">
                          <div className="flex justify-center items-center gap-4 flex-wrap">
                            {preview && (
                              <img
                                src={preview}
                                alt="Main preview"
                                className="w-[150px] h-[100px] object-cover rounded"
                              />
                            )}

                            {previewlist.length < 3 ? (
                              <img
                                src="https://cdn-icons-png.freepik.com/512/2893/2893432.png"
                                alt="Upload"
                                className="w-[80px] h-[80px]"
                              />
                            ) : (
                              ""
                            )}
                          </div>
                        </label>

                        {/* Thumbnail previews */}
                        <div className="flex gap-2 flex-wrap items-center justify-center mb-5">
                          {previewlist?.map((item, index) => (
                            <img
                              key={index}
                              src={item}
                              alt={"preview"}
                              className="w-[100px] h-[80px] object-cover rounded border"
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="ml-25">
                        <label htmlFor="image">
                          <input
                            type="file"
                            name="image"
                            id="image"
                            hidden
                            onChange={(e) => handleimageupload(e)}
                          />
                          <img
                            src="https://cdn-icons-png.freepik.com/512/2893/2893432.png"
                            alt=""
                            width={"150px"}
                            height={"50px"}
                          />
                        </label>
                      </div>
                    )}

                    <div className="flex gap-6 ml-50">
                      <Button color="blue" onClick={addbookuser}>
                        Save
                      </Button>
                      <Button className="bg-[#FFA500]">Reset</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabItem>
          {/* Book Status */}
          <TabItem title="Book Status">
            <div className="mt-9">
              <Card
                style={{
                  backgroundColor: "#65606017",
                  width: "900px",
                  marginBottom: "30px",
                }}
              >
                <div className="flex justify-between p-2">
                  {/* data  */}
                  <div className="p-3">
                    <h3>Book name</h3>
                    <p>Authr</p>
                    <p>price</p>
                    <p>status</p>
                  </div>
                  <div>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2022/9/BH/TW/OG/131304665/old-books.jpg"
                      alt=""
                      width="200px"
                      height="250px"
                    />
                    <Button color="red" className="ml-25 mt-3">
                      Delete
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </TabItem>
          <TabItem title="Purchase History">
            <div className="mt-9">
              <Card
                style={{
                  backgroundColor: "#65606017",
                  width: "900px",
                  marginBottom: "30px",
                }}
              >
                <div className="flex justify-between p-2">
                  {/* data  */}
                  <div className="p-3">
                    <h3>Book name</h3>
                    <p>Authr</p>
                    <p>price</p>
                    <p>Description</p>
                    <p>status</p>
                  </div>
                  <div>
                    <img
                      src="https://5.imimg.com/data5/SELLER/Default/2022/9/BH/TW/OG/131304665/old-books.jpg"
                      alt=""
                      width="200px"
                      height="250px"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </TabItem>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
