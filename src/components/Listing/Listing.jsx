import PropTypes from 'prop-types';

export default function Listing(props) {
    const { items } = props;

    return (
        <ul className="item-list">
            {items.map((item) => (
                <ListItem key={item.listing_id} item={item} />
            ))}
        </ul>
    );
}

function ListItem({ item }) {
    const { url, MainImage, title, currency_code, price, quantity, state } = item;

    if (state !== 'active') {
        return null;
    }

    const name = title.length > 50 ? `${title.slice(0, 50)}...` : title;
    let pricetag;
    let colorclass;

    if (currency_code === 'USD') {
        pricetag = `$${price}`;
    } else if (currency_code === 'EUR') {
        pricetag = `€${price}`;
    } else {
        pricetag = `${price} ${currency_code}`;
    }

    if (quantity <= 10) {
        colorclass = 'level-low';
    } else if (quantity <= 20) {
        colorclass = 'level-medium';
    } else {
        colorclass = 'level-high';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{name}</p>
                <p className="item-price">{pricetag}</p>
                <p className={`item-quantity ${colorclass}`}>{quantity} left</p>
            </div>
        </div>
    );
}

ListItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
        listing_id: PropTypes.number,
    }),
};

Listing.defaultProps = {
    items: [],
};

Listing.propTypes = {
    items: PropTypes.array.isRequired,
};