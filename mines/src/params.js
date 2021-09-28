import { Dimensions } from "react-native"

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior na tela em 15%
    difficultLevel: 0.1, // Nesse caso 10% dos campos estarão com mina
    getColumnsAmount() {
        const width = Dimensions.get('window').width
            return Math.floor(width / this.blockSize) //floor arredonda pra baixo pra não ultrapassar a tela
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
            return Math.floor(boardHeight / this.blockSize)
    }
}

export default params