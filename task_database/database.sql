SELECT person.first_name, person.last_name ,COUNT(DISTINCT `order`.id) as total_orders
,SUM(order_item.quantity) as total_items_bought,
SUM(order_item.quantity * item.price - order_item.discount) as total_money_spent
FROM order_item
JOIN `order`
ON order_item.order_id = `order`.id
JOIN item
ON order_item.item_id = item.id
RIGHT OUTER JOIN person
ON `order`.person_id = person.id
GROUP BY person.id
