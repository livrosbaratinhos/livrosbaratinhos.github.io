import Slugify from "../Slugify";

const BookAdapter = () => {

    function objectFromData (data) {
        const slug = Slugify(`${data.titulo} ${data.autor}`);
        const precoSugerido = data["preco-sugerido"];
        const preco = data.paginas / 100;
        const foiVendido = data.vendido === "Sim";
        console.log(data.vendido, foiVendido); // eslint-disable-line
        const getImageUrl = (lado) => `https://github.com/livrosbaratinhos/imagens/blob/master/${slug}/${lado}.jpg?raw=true`;
        const getSmallImageUrl = (lado) => `https://demo.cloudimg.io/height/200/n/${getImageUrl(lado)}`;

        return {
            precoSugerido,
            preco,
            slug,
            titulo: data.titulo,
            autor: data.autor,
            observacoes: data.obs === "" ? null : data.obs,
            numeroDePagina: data.paginas,
            foiVendido,
            precoAmazon: data["preco-amazon"],
            linkParaMensagem: `https://wa.me/5512981554977?text=${encodeURI("Olá, Tudo bem? Tenho interesse em comprar o livro '")}${data.titulo}.'.`,
            imagens: {
                capa: {
                    pequena: getSmallImageUrl("capa"),
                    normal: getImageUrl("capa")
                },
                contraCapa: {
                    pequena: getSmallImageUrl("contra-capa"),
                    normal: getImageUrl("contra-capa")
                },
            }
        };
    }

    return {
        objectFromData: objectFromData
    };
};

BookAdapter.$inject = [];

export default BookAdapter;