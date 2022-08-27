const scrollImages = {
    1: 'scrolling-images/scroll-testing0001.png',
    2: 'scrolling-images/scroll-testing0003.png',
    3: 'scrolling-images/scroll-testing0005.png',
    4: 'scrolling-images/scroll-testing0007.png',
    5: 'scrolling-images/scroll-testing0009.png',
    6: 'scrolling-images/scroll-testing0011.png',
    7: 'scrolling-images/scroll-testing0013.png',
    8: 'scrolling-images/scroll-testing0015.png',
    9: 'scrolling-images/scroll-testing0017.png',
    10: 'scrolling-images/scroll-testing0019.png',
    11: 'scrolling-images/scroll-testing0021.png',
    12: 'scrolling-images/scroll-testing0023.png',
    13: 'scrolling-images/scroll-testing0025.png',
    14: 'scrolling-images/scroll-testing0027.png',
    15: 'scrolling-images/scroll-testing0029.png',
    16: 'scrolling-images/scroll-testing0031.png',
    17: 'scrolling-images/scroll-testing0033.png',
    18: 'scrolling-images/scroll-testing0035.png',
    19: 'scrolling-images/scroll-testing0037.png',
    20: 'scrolling-images/scroll-testing0039.png',
    21: 'scrolling-images/scroll-testing0041.png',
    22: 'scrolling-images/scroll-testing0043.png',
    23: 'scrolling-images/scroll-testing0045.png',
    24: 'scrolling-images/scroll-testing0047.png',
    25: 'scrolling-images/scroll-testing0049.png',
    26: 'scrolling-images/scroll-testing0051.png',
    27: 'scrolling-images/scroll-testing0053.png',
    28: 'scrolling-images/scroll-testing0055.png',
    29: 'scrolling-images/scroll-testing0057.png',
    30: 'scrolling-images/scroll-testing0059.png',
    31: 'scrolling-images/scroll-testing0061.png',
    32: 'scrolling-images/scroll-testing0063.png',
    33: 'scrolling-images/scroll-testing0065.png',
    34: 'scrolling-images/scroll-testing0067.png',
    35: 'scrolling-images/scroll-testing0069.png',
    36: 'scrolling-images/scroll-testing0071.png',
    37: 'scrolling-images/scroll-testing0073.png',
    38: 'scrolling-images/scroll-testing0075.png',
    39: 'scrolling-images/scroll-testing0077.png',
    40: 'scrolling-images/scroll-testing0079.png',
    41: 'scrolling-images/scroll-testing0081.png',
    42: 'scrolling-images/scroll-testing0083.png',
    43: 'scrolling-images/scroll-testing0085.png',
    44: 'scrolling-images/scroll-testing0087.png',
    45: 'scrolling-images/scroll-testing0089.png',
    46: 'scrolling-images/scroll-testing0091.png',
    47: 'scrolling-images/scroll-testing0093.png',
    48: 'scrolling-images/scroll-testing0095.png',
    49: 'scrolling-images/scroll-testing0097.png',
    50: 'scrolling-images/scroll-testing0099.png',
    51: 'scrolling-images/scroll-testing0101.png',
    52: 'scrolling-images/scroll-testing0103.png',
    53: 'scrolling-images/scroll-testing0105.png',
    54: 'scrolling-images/scroll-testing0107.png',
    55: 'scrolling-images/scroll-testing0109.png',
    56: 'scrolling-images/scroll-testing0111.png',
    57: 'scrolling-images/scroll-testing0113.png',
    58: 'scrolling-images/scroll-testing0115.png',
    59: 'scrolling-images/scroll-testing0117.png',
    60: 'scrolling-images/scroll-testing0119.png',
}

let prevLabel = 0;

function preloadImages()
{
    for (const image in scrollImages) {
        new Image().src = scrollImages[image];
    }
}

function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y/3) + 1, 60);
    if (label != prevLabel) {
        prevLabel = label;
        const imageToUse = scrollImages[label];
        document.body.style.backgroundImage = `url(${imageToUse})`;
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        preloadImages();
        window.onscroll = (e) => { 
            trackScrollPosition(); 
        }
    }
};