const formatNumber = num => {
    return num >= 1000 && num < 1000000 ? (num / 1000).toFixed(1) + 'K' :
        (num / 1000000).toFixed(1) +
        'M'
}

export default formatNumber;