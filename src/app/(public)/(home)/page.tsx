"use client"
import BannerCards from "@/components/BannerCards";
import { getProduct } from "@/service/product.service";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate"
import './pagination.css';
import { useProduct } from "@/components/Context/ProductContext";

export default function Home() {
    // para receber o valor do context! = const + parametro do contexto que eu quero

    const { filteredProduct } = useProduct()

    // usestate começa contando do 0
    const [currentPage, setCurrentPage] = useState(0)
    if (!filteredProduct) {
        return null
    }
    // fazendo paginação 10 itens por pagina
    const itensPerPagina = 8
    // fazendo a conta por pagina
    const offSet = currentPage * itensPerPagina
    const currentPageData = filteredProduct.slice(offSet, offSet + itensPerPagina)
    const pageCount = Math.ceil(filteredProduct.length / itensPerPagina)
    const handlePageClick = ({ selected }: { selected: number }) => {
        setCurrentPage(selected);
    };
    return (
        <>
            <Box as="ul"
                display="flex"
                gap="30px"
                padding="20px"
                flexWrap="wrap"
                justifyContent="space-evenly">
                <BannerCards product={currentPageData} />
            </Box>
            <Box mt="3rem" justifyContent="center" mb="3rem">
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
                    activeClassName={"active"} />
            </Box>
        </>
    );
};
