"use client"
import BannerCards from "@/components/BannerCards";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useProduct } from "@/components/Context/ProductContext";
import ReactPaginate from "react-paginate";
import './pagination.css';


export default function Home() {
    const { filteredProduct } = useProduct();
    const [currentPage, setCurrentPage] = useState(0);


    if (!filteredProduct) {
        return null;
    }

    const itensPerPagina = 8;
    const offSet = currentPage * itensPerPagina;
    const currentPageData = filteredProduct.slice(offSet, offSet + itensPerPagina);
    const pageCount = Math.ceil(filteredProduct.length / itensPerPagina);
    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <Box
                as="ul"
                display="flex"
                gap="30px"
                padding="20px"
                flexWrap="wrap"
                justifyContent="space-evenly"
            >
                <BannerCards product={currentPageData} />
            </Box>
            <Box mt="3rem" mb="3rem" display="flex" justifyContent="center">
                <ReactPaginate
                    previousLabel={"Anterior"}
                    nextLabel={"Próximo"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    activeClassName={"active"}
                    previousClassName={"prev"}
                    nextClassName={"next"}
                />
            </Box>

        </>
    );
}