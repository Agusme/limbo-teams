/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "./PaginationCards";
import ModalCard from "./ModalCard";

const PostCard = ({ searchTerm }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [show, setShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const postsPerPage = 10;
  const baseURL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    getPosts(currentPage);
  }, [currentPage]);

  const getPosts = async (page) => {
    try {
      const res = await axios.get(
        `${baseURL}/posts?_page=${page}&_limit=${postsPerPage}`
      );
      setPosts(res.data);
      const total = res.headers["x-total-count"];
      setTotalPosts(Number(total));
    } catch (error) {
      console.error("Error en el servidor: " + error);
    }
  };

  const getAuthor = async (userId) => {
    if (users[userId]) {
      setSelectedAuthor(users[userId]);
      return;
    }
    try {
      const res = await axios.get(`${baseURL}/users/${userId}`);
      const authorData = res.data;

      setUsers((prevUsers) => ({ ...prevUsers, [userId]: authorData }));

      setSelectedAuthor(authorData);
    } catch (error) {
      console.error("Error al obtener el autor: ", error);
    }
  };

  const handleShow = async (post) => {
    await getAuthor(post.userId);
    setSelectedPost(post);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredPosts = searchTerm
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const truncateBody = (body, wordLimit = 10) => {
    const words = body.split(" ");
    if (words.length <= wordLimit) return body;
    return words.slice(0, wordLimit).join(" ") + " ...";
  };

  return (
    <div className="p-5 mb-5">
      <Row className="g-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((item) => (
            <Col lg={3} md={4} sm={1} key={item.id}>
              <Card
                className="bg-card border-0 d-flex flex-column h-100"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Card.Body className="d-flex flex-column text-white">
                  <Card.Title className="d-flex justify-content-center align-items-center">
                    {item.title}
                  </Card.Title>
                  <hr />
                  <p>{truncateBody(item.body)} </p>
                  <Button
                    className="button-card border-0 mt-auto"
                    onClick={() => handleShow(item)}
                  >
                    Ver más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No se encontraron resultados😓</p>
        )}
      </Row>

      {!searchTerm && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <ModalCard
        handleClose={handleClose}
        show={show}
        post={selectedPost}
        author={selectedAuthor}
      />
    </div>
  );
};

export default PostCard;
