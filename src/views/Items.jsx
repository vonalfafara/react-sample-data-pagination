import axios from "axios"
import { useEffect, useState, useRef } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Item from "../components/Item";
import Dialog from "../components/Dialog";

const Items = () => {
  const [items, setItems] = useState([])
  const [images, setImages] = useState([])
  const [showDialog, setShowDialog] = useState(false)
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [limit, setLimit] = useState(9)

  async function getItems() {
    const res = await axios.get(`https://react-sample-data-pagination-server.onrender.com/products?_page=${page}&_limit=${limit}`)
    setItems(res.data)
    console.log(res.data)
  }

  async function getTotalItems() {
    const res = await axios.get(`https://react-sample-data-pagination-server.onrender.com/products`)
    setPages(Math.ceil(res.data.length / limit))
  }

  function handleSetImages(slideshow) {
    setImages(slideshow)
    handleToggleDialog(true)
  }

  function handleToggleDialog(isShow) {
    setShowDialog(isShow)
  }

  useEffect(() => {
    getTotalItems()
    return
  }, [])

  useEffect(() => {
    getItems()
    return
  }, [page])

  return (
    <div>
      <Container>
        <Row>
          {items.map((item, index) => {
            return (
              <Item key={index} item={item} onSetImages={handleSetImages}></Item>
            )
          })}
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Pagination>
              {Array.from(Array(pages).keys()).map((pageNum) => {
                return (
                  <Pagination.Item key={pageNum + 1} active={page === pageNum + 1} onClick={() => setPage(pageNum + 1)}>{pageNum + 1}</Pagination.Item>
                )
              })}
            </Pagination>
          </Col>
        </Row>
      </Container>
      <Dialog isShow={showDialog} images={images} onHandleDialogShow={handleToggleDialog} />
    </div>
  )
}

export default Items