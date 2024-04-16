const prisma = require("../db")

const createOrderListItem = async (orderListItemData) => {

    const orderListItem = await prisma.orderlistitem.create({
        data: {
            orderlistId: orderListItemData.orderlistId,
            productsId: orderListItemData.productsId,
            productPrice: orderListItemData.productPrice,
            qty: orderListItemData.qty
        }
    })

    return orderListItem
}

const deleteOrderListItem = async (orderListItemId) => {
    await prisma.orderlistitem.delete({
        where: {
            id: orderListItemId
        }
    })
}

module.exports = {
    createOrderListItem,
    deleteOrderListItem
}