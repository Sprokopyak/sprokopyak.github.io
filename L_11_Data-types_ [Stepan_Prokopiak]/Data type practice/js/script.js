var votes = [ 'angular', 'angular', 'react', 'react', 'react', 'angular', 'ember', 'react', 'vanilla' ];

var initialValue = {};

 function vote (current, i) {
  if(!current[i]) {
    current[i] = 1;
  } else {
    current[i]++;
  }
  return current;
}
var result = votes.reduce(vote, initialValue);
console.log(result);


var users = [{
  "id": 1,
  "first_name": "Jim",
  "last_name": "Roebuck",
  "email": "jroebuck0@qq.com",
  "gender": "Male",
  "ip_address": "99.100.218.67",
  "favorite_color": "Goldenrod"
}, {
  "id": 2,
  "first_name": "Raviv",
  "last_name": "Hawkes",
  "email": "rhawkes1@umn.edu",
  "gender": "Male",
  "ip_address": "121.28.86.20",
  "favorite_color": "Mauv"
}, {
  "id": 3,
  "first_name": "Wendell",
  "last_name": "Amies",
  "email": "wamies2@gravatar.com",
  "gender": "Male",
  "ip_address": "83.174.73.15",
  "favorite_color": "Indigo"
}, {
  "id": 4,
  "first_name": "Ruthann",
  "last_name": "Beckinsale",
  "email": "rbeckinsale3@europa.eu",
  "gender": "Female",
  "ip_address": "150.171.44.47",
  "favorite_color": "Yellow"
}, {
  "id": 5,
  "first_name": "Carlynn",
  "last_name": "Urwen",
  "email": "curwen4@craigslist.org",
  "gender": "Female",
  "ip_address": "131.235.207.21",
  "favorite_color": "Pink"
}, {
  "id": 6,
  "first_name": "Justin",
  "last_name": "Castelin",
  "email": "jcastelin5@stanford.edu",
  "gender": "Male",
  "ip_address": "238.156.28.229",
  "favorite_color": "Blue"
}, {
  "id": 7,
  "first_name": "Chad",
  "last_name": "Markwell",
  "email": "cmarkwell6@cdc.gov",
  "gender": "Male",
  "ip_address": "40.60.169.193",
  "favorite_color": "Maroon"
}, {
  "id": 8,
  "first_name": "Glendon",
  "last_name": "Widdecombe",
  "email": "gwiddecombe7@mediafire.com",
  "gender": "Male",
  "ip_address": "21.47.144.115",
  "favorite_color": "Teal"
}, {
  "id": 9,
  "first_name": "Robbin",
  "last_name": "Francois",
  "email": "rfrancois8@woothemes.com",
  "gender": "Female",
  "ip_address": "136.204.231.148",
  "favorite_color": "Puce"
}, {
  "id": 10,
  "first_name": "Bee",
  "last_name": "Huglin",
  "email": "bhuglin9@wsj.com",
  "gender": "Female",
  "ip_address": "70.221.115.61",
  "favorite_color": "Red"
}, {
  "id": 11,
  "first_name": "Lotta",
  "last_name": "Vsanelli",
  "email": "lvsanellia@google.com",
  "gender": "Female",
  "ip_address": "146.39.140.223",
  "favorite_color": "Pink"
}, {
  "id": 12,
  "first_name": "Lydon",
  "last_name": "Abbiss",
  "email": "labbissb@guardian.co.uk",
  "gender": "Male",
  "ip_address": "168.248.155.137",
  "favorite_color": "Teal"
}, {
  "id": 13,
  "first_name": "Horst",
  "last_name": "Coppock.",
  "email": "hcoppockc@phpbb.com",
  "gender": "Male",
  "ip_address": "72.96.142.202",
  "favorite_color": "Khaki"
}, {
  "id": 14,
  "first_name": "Vanessa",
  "last_name": "McCrystal",
  "email": "vmccrystald@tmall.com",
  "gender": "Female",
  "ip_address": "97.19.91.154",
  "favorite_color": "Teal"
}, {
  "id": 15,
  "first_name": "Christoffer",
  "last_name": "Flemming",
  "email": "cflemminge@woothemes.com",
  "gender": "Male",
  "ip_address": "110.224.35.242",
  "favorite_color": "Crimson"
}, {
  "id": 16,
  "first_name": "Jeth",
  "last_name": "Carlisi",
  "email": "jcarlisif@multiply.com",
  "gender": "Male",
  "ip_address": "50.219.190.61",
  "favorite_color": "Mauv"
}, {
  "id": 17,
  "first_name": "Chad",
  "last_name": "Boddy",
  "email": "cboddyg@google.com.au",
  "gender": "Female",
  "ip_address": "94.130.110.146",
  "favorite_color": "Pink"
}, {
  "id": 18,
  "first_name": "Tommy",
  "last_name": "Bhar",
  "email": "tbharh@smh.com.au",
  "gender": "Male",
  "ip_address": "165.15.174.15",
  "favorite_color": "Teal"
}, {
  "id": 19,
  "first_name": "Dunn",
  "last_name": "Mattisssen",
  "email": "dmattissseni@ox.ac.uk",
  "gender": "Male",
  "ip_address": "117.60.239.233",
  "favorite_color": "Fuscia"
}, {
  "id": 20,
  "first_name": "Orin",
  "last_name": "Roux",
  "email": "orouxj@weebly.com",
  "gender": "Male",
  "ip_address": "160.7.58.153",
  "favorite_color": "Puce"
}, {
  "id": 21,
  "first_name": "Odey",
  "last_name": "Segeswoeth",
  "email": "osegeswoethk@upenn.edu",
  "gender": "Male",
  "ip_address": "95.165.33.34",
  "favorite_color": "Mauv"
}, {
  "id": 22,
  "first_name": "Engracia",
  "last_name": "Walcar",
  "email": "ewalcarl@salon.com",
  "gender": "Female",
  "ip_address": "36.129.219.51",
  "favorite_color": "Teal"
}, {
  "id": 23,
  "first_name": "Conny",
  "last_name": "Oade",
  "email": "coadem@engadget.com",
  "gender": "Female",
  "ip_address": "133.46.234.235",
  "favorite_color": "Yellow"
}, {
  "id": 24,
  "first_name": "Joane",
  "last_name": "Phant",
  "email": "jphantn@foxnews.com",
  "gender": "Female",
  "ip_address": "41.100.14.237",
  "favorite_color": "Yellow"
}, {
  "id": 25,
  "first_name": "Kareem",
  "last_name": "Kiledal",
  "email": "kkiledalo@myspace.com",
  "gender": "Male",
  "ip_address": "105.29.36.92",
  "favorite_color": "Purple"
}, {
  "id": 26,
  "first_name": "Trumaine",
  "last_name": "Marrett",
  "email": "tmarrettp@reuters.com",
  "gender": "Male",
  "ip_address": "61.33.121.229",
  "favorite_color": "Crimson"
}, {
  "id": 27,
  "first_name": "Bil",
  "last_name": "Haryngton",
  "email": "bharyngtonq@photobucket.com",
  "gender": "Male",
  "ip_address": "205.204.249.77",
  "favorite_color": "Purple"
}, {
  "id": 28,
  "first_name": "Mohammed",
  "last_name": "Fonzone",
  "email": "mfonzoner@hp.com",
  "gender": "Male",
  "ip_address": "13.100.183.157",
  "favorite_color": "Teal"
}, {
  "id": 29,
  "first_name": "Georgianna",
  "last_name": "MacBey",
  "email": "gmacbeys@disqus.com",
  "gender": "Female",
  "ip_address": "86.127.197.60",
  "favorite_color": "Red"
}, {
  "id": 30,
  "first_name": "Ethel",
  "last_name": "Amey",
  "email": "eameyt@issuu.com",
  "gender": "Female",
  "ip_address": "105.76.150.40",
  "favorite_color": "Blue"
}, {
  "id": 31,
  "first_name": "Marna",
  "last_name": "Lernihan",
  "email": "mlernihanu@liveinternet.ru",
  "gender": "Female",
  "ip_address": "181.146.64.199",
  "favorite_color": "Pink"
}, {
  "id": 32,
  "first_name": "Kleon",
  "last_name": "Grimoldby",
  "email": "kgrimoldbyv@washingtonpost.com",
  "gender": "Male",
  "ip_address": "10.183.135.226",
  "favorite_color": "Blue"
}, {
  "id": 33,
  "first_name": "Merry",
  "last_name": "Maggiore",
  "email": "mmaggiorew@ca.gov",
  "gender": "Male",
  "ip_address": "94.61.175.190",
  "favorite_color": "Blue"
}, {
  "id": 34,
  "first_name": "Madalena",
  "last_name": "Outright",
  "email": "moutrightx@answers.com",
  "gender": "Female",
  "ip_address": "230.80.220.214",
  "favorite_color": "Maroon"
}, {
  "id": 35,
  "first_name": "Matthiew",
  "last_name": "Matys",
  "email": "mmatysy@t-online.de",
  "gender": "Male",
  "ip_address": "44.21.114.157",
  "favorite_color": "Yellow"
}, {
  "id": 36,
  "first_name": "Lina",
  "last_name": "Linde",
  "email": "llindez@goodreads.com",
  "gender": "Female",
  "ip_address": "168.32.134.126",
  "favorite_color": "Turquoise"
}, {
  "id": 37,
  "first_name": "Davidde",
  "last_name": "Tudhope",
  "email": "dtudhope10@geocities.com",
  "gender": "Male",
  "ip_address": "76.202.128.243",
  "favorite_color": "Turquoise"
}, {
  "id": 38,
  "first_name": "Conan",
  "last_name": "Cuffe",
  "email": "ccuffe11@nhs.uk",
  "gender": "Male",
  "ip_address": "75.145.122.132",
  "favorite_color": "Yellow"
}, {
  "id": 39,
  "first_name": "Karmen",
  "last_name": "Thomasson",
  "email": "kthomasson12@liveinternet.ru",
  "gender": "Female",
  "ip_address": "146.241.193.151",
  "favorite_color": "Indigo"
}, {
  "id": 40,
  "first_name": "Elroy",
  "last_name": "Ducket",
  "email": "educket13@yahoo.co.jp",
  "gender": "Male",
  "ip_address": "234.16.77.51",
  "favorite_color": "Indigo"
}, {
  "id": 41,
  "first_name": "Charo",
  "last_name": "Deetch",
  "email": "cdeetch14@youtu.be",
  "gender": "Female",
  "ip_address": "95.96.123.153",
  "favorite_color": "Purple"
}, {
  "id": 42,
  "first_name": "Rockie",
  "last_name": "MacCleay",
  "email": "rmaccleay15@tamu.edu",
  "gender": "Male",
  "ip_address": "214.208.195.211",
  "favorite_color": "Goldenrod"
}, {
  "id": 43,
  "first_name": "Wood",
  "last_name": "Boteman",
  "email": "wboteman16@desdev.cn",
  "gender": "Male",
  "ip_address": "236.160.223.148",
  "favorite_color": "Purple"
}, {
  "id": 44,
  "first_name": "Meridith",
  "last_name": "Ravenhills",
  "email": "mravenhills17@samsung.com",
  "gender": "Female",
  "ip_address": "97.229.167.176",
  "favorite_color": "Fuscia"
}, {
  "id": 45,
  "first_name": "Ralf",
  "last_name": "Nicholes",
  "email": "rnicholes18@mail.ru",
  "gender": "Male",
  "ip_address": "87.208.175.94",
  "favorite_color": "Khaki"
}, {
  "id": 46,
  "first_name": "Gwenette",
  "last_name": "Milkins",
  "email": "gmilkins19@baidu.com",
  "gender": "Female",
  "ip_address": "37.64.246.26",
  "favorite_color": "Blue"
}, {
  "id": 47,
  "first_name": "Cinnamon",
  "last_name": "Doncom",
  "email": "cdoncom1a@weather.com",
  "gender": "Female",
  "ip_address": "201.42.72.216",
  "favorite_color": "Turquoise"
}, {
  "id": 48,
  "first_name": "Sergent",
  "last_name": "Gummie",
  "email": "sgummie1b@wisc.edu",
  "gender": "Male",
  "ip_address": "122.58.203.229",
  "favorite_color": "Mauv"
}, {
  "id": 49,
  "first_name": "Wynne",
  "last_name": "Coveley",
  "email": "wcoveley1c@springer.com",
  "gender": "Female",
  "ip_address": "191.122.242.86",
  "favorite_color": "Green"
}, {
  "id": 50,
  "first_name": "Portia",
  "last_name": "Mertsching",
  "email": "pmertsching1d@bigcartel.com",
  "gender": "Female",
  "ip_address": "91.191.2.150",
  "favorite_color": "Fuscia"
}, {
  "id": 51,
  "first_name": "Aguistin",
  "last_name": "Gilpin",
  "email": "agilpin1e@vinaora.com",
  "gender": "Male",
  "ip_address": "73.110.150.192",
  "favorite_color": "Orange"
}, {
  "id": 52,
  "first_name": "Zaria",
  "last_name": "Grimsdith",
  "email": "zgrimsdith1f@networkadvertising.org",
  "gender": "Female",
  "ip_address": "240.173.146.232",
  "favorite_color": "Aquamarine"
}, {
  "id": 53,
  "first_name": "Dewie",
  "last_name": "Goudman",
  "email": "dgoudman1g@xing.com",
  "gender": "Male",
  "ip_address": "168.178.241.42",
  "favorite_color": "Orange"
}, {
  "id": 54,
  "first_name": "Perkin",
  "last_name": "Darlow",
  "email": "pdarlow1h@123-reg.co.uk",
  "gender": "Male",
  "ip_address": "249.13.174.244",
  "favorite_color": "Fuscia"
}, {
  "id": 55,
  "first_name": "Marquita",
  "last_name": "Jenking",
  "email": "mjenking1i@home.pl",
  "gender": "Female",
  "ip_address": "156.93.242.19",
  "favorite_color": "Violet"
}, {
  "id": 56,
  "first_name": "Roger",
  "last_name": "O'Connell",
  "email": "roconnell1j@who.int",
  "gender": "Male",
  "ip_address": "199.7.109.194",
  "favorite_color": "Aquamarine"
}, {
  "id": 57,
  "first_name": "Shelagh",
  "last_name": "Matthisson",
  "email": "smatthisson1k@reference.com",
  "gender": "Female",
  "ip_address": "196.27.67.112",
  "favorite_color": "Fuscia"
}, {
  "id": 58,
  "first_name": "Evangelia",
  "last_name": "Durnill",
  "email": "edurnill1l@uiuc.edu",
  "gender": "Female",
  "ip_address": "106.155.170.64",
  "favorite_color": "Indigo"
}, {
  "id": 59,
  "first_name": "Malena",
  "last_name": "Berger",
  "email": "mberger1m@ow.ly",
  "gender": "Female",
  "ip_address": "228.228.12.14",
  "favorite_color": "Violet"
}, {
  "id": 60,
  "first_name": "Joel",
  "last_name": "Labbati",
  "email": "jlabbati1n@bigcartel.com",
  "gender": "Male",
  "ip_address": "28.104.165.53",
  "favorite_color": "Purple"
}, {
  "id": 61,
  "first_name": "Hesther",
  "last_name": "Bourne",
  "email": "hbourne1o@abc.net.au",
  "gender": "Female",
  "ip_address": "118.27.170.58",
  "favorite_color": "Turquoise"
}, {
  "id": 62,
  "first_name": "Foss",
  "last_name": "Spottiswoode",
  "email": "fspottiswoode1p@amazon.co.jp",
  "gender": "Male",
  "ip_address": "170.237.27.3",
  "favorite_color": "Khaki"
}, {
  "id": 63,
  "first_name": "Wendye",
  "last_name": "Crippell",
  "email": "wcrippell1q@addthis.com",
  "gender": "Female",
  "ip_address": "20.159.28.49",
  "favorite_color": "Red"
}, {
  "id": 64,
  "first_name": "Roman",
  "last_name": "Orsman",
  "email": "rorsman1r@msu.edu",
  "gender": "Male",
  "ip_address": "204.213.34.29",
  "favorite_color": "Teal"
}, {
  "id": 65,
  "first_name": "Chip",
  "last_name": "Manilow",
  "email": "cmanilow1s@ovh.net",
  "gender": "Male",
  "ip_address": "254.164.224.77",
  "favorite_color": "Yellow"
}, {
  "id": 66,
  "first_name": "Trina",
  "last_name": "Weatherburn",
  "email": "tweatherburn1t@mapy.cz",
  "gender": "Female",
  "ip_address": "249.231.76.66",
  "favorite_color": "Yellow"
}, {
  "id": 67,
  "first_name": "Merry",
  "last_name": "Jordine",
  "email": "mjordine1u@blog.com",
  "gender": "Female",
  "ip_address": "43.23.8.105",
  "favorite_color": "Fuscia"
}, {
  "id": 68,
  "first_name": "Lizbeth",
  "last_name": "Jeppensen",
  "email": "ljeppensen1v@opera.com",
  "gender": "Female",
  "ip_address": "71.34.96.161",
  "favorite_color": "Maroon"
}, {
  "id": 69,
  "first_name": "Waverley",
  "last_name": "Bebis",
  "email": "wbebis1w@bizjournals.com",
  "gender": "Male",
  "ip_address": "169.146.232.111",
  "favorite_color": "Blue"
}, {
  "id": 70,
  "first_name": "Ninetta",
  "last_name": "Phayre",
  "email": "nphayre1x@who.int",
  "gender": "Female",
  "ip_address": "38.120.37.189",
  "favorite_color": "Orange"
}, {
  "id": 71,
  "first_name": "Barton",
  "last_name": "Pottell",
  "email": "bpottell1y@behance.net",
  "gender": "Male",
  "ip_address": "39.12.38.218",
  "favorite_color": "Puce"
}, {
  "id": 72,
  "first_name": "Easter",
  "last_name": "Pipe",
  "email": "epipe1z@tiny.cc",
  "gender": "Female",
  "ip_address": "100.43.151.164",
  "favorite_color": "Purple"
}, {
  "id": 73,
  "first_name": "Arlina",
  "last_name": "Greenhill",
  "email": "agreenhill20@nationalgeographic.com",
  "gender": "Female",
  "ip_address": "100.240.87.186",
  "favorite_color": "Green"
}, {
  "id": 74,
  "first_name": "Westbrook",
  "last_name": "Ambrogio",
  "email": "wambrogio21@ask.com",
  "gender": "Male",
  "ip_address": "38.84.23.223",
  "favorite_color": "Orange"
}, {
  "id": 75,
  "first_name": "Rob",
  "last_name": "Facey",
  "email": "rfacey22@mlb.com",
  "gender": "Male",
  "ip_address": "172.250.211.17",
  "favorite_color": "Red"
}, {
  "id": 76,
  "first_name": "Patsy",
  "last_name": "Van der Velde",
  "email": "pvandervelde23@fema.gov",
  "gender": "Female",
  "ip_address": "196.209.52.81",
  "favorite_color": "Maroon"
}, {
  "id": 77,
  "first_name": "Rita",
  "last_name": "Durnford",
  "email": "rdurnford24@wikispaces.com",
  "gender": "Female",
  "ip_address": "186.89.41.95",
  "favorite_color": "Aquamarine"
}, {
  "id": 78,
  "first_name": "Annabela",
  "last_name": "Dubose",
  "email": "adubose25@hugedomains.com",
  "gender": "Female",
  "ip_address": "52.210.144.157",
  "favorite_color": "Red"
}, {
  "id": 79,
  "first_name": "Tyrone",
  "last_name": "Bouchier",
  "email": "tbouchier26@springer.com",
  "gender": "Male",
  "ip_address": "30.142.111.238",
  "favorite_color": "Puce"
}, {
  "id": 80,
  "first_name": "Sheffy",
  "last_name": "Servante",
  "email": "sservante27@yelp.com",
  "gender": "Male",
  "ip_address": "104.83.236.42",
  "favorite_color": "Green"
}, {
  "id": 81,
  "first_name": "Emmalynn",
  "last_name": "Blackhall",
  "email": "eblackhall28@weebly.com",
  "gender": "Female",
  "ip_address": "53.188.85.32",
  "favorite_color": "Indigo"
}, {
  "id": 82,
  "first_name": "Fredra",
  "last_name": "Paroni",
  "email": "fparoni29@mtv.com",
  "gender": "Female",
  "ip_address": "192.114.14.215",
  "favorite_color": "Fuscia"
}, {
  "id": 83,
  "first_name": "Malena",
  "last_name": "Calrow",
  "email": "mcalrow2a@symantec.com",
  "gender": "Female",
  "ip_address": "159.79.181.140",
  "favorite_color": "Mauv"
}, {
  "id": 84,
  "first_name": "Inga",
  "last_name": "Geal",
  "email": "igeal2b@tumblr.com",
  "gender": "Female",
  "ip_address": "106.38.40.63",
  "favorite_color": "Mauv"
}, {
  "id": 85,
  "first_name": "Emmanuel",
  "last_name": "Tinto",
  "email": "etinto2c@mozilla.com",
  "gender": "Male",
  "ip_address": "187.55.137.199",
  "favorite_color": "Purple"
}, {
  "id": 86,
  "first_name": "Lanae",
  "last_name": "Dougary",
  "email": "ldougary2d@samsung.com",
  "gender": "Female",
  "ip_address": "239.161.244.157",
  "favorite_color": "Green"
}, {
  "id": 87,
  "first_name": "Fernanda",
  "last_name": "Duchenne",
  "email": "fduchenne2e@gravatar.com",
  "gender": "Female",
  "ip_address": "33.182.139.187",
  "favorite_color": "Violet"
}, {
  "id": 88,
  "first_name": "Bert",
  "last_name": "Climpson",
  "email": "bclimpson2f@timesonline.co.uk",
  "gender": "Male",
  "ip_address": "53.10.199.104",
  "favorite_color": "Green"
}, {
  "id": 89,
  "first_name": "Doy",
  "last_name": "Sivorn",
  "email": "dsivorn2g@ox.ac.uk",
  "gender": "Male",
  "ip_address": "19.193.240.147",
  "favorite_color": "Puce"
}, {
  "id": 90,
  "first_name": "Morey",
  "last_name": "Wait",
  "email": "mwait2h@sina.com.cn",
  "gender": "Male",
  "ip_address": "4.171.48.208",
  "favorite_color": "Pink"
}, {
  "id": 91,
  "first_name": "Cordy",
  "last_name": "Dewey",
  "email": "cdewey2i@google.co.uk",
  "gender": "Male",
  "ip_address": "33.245.214.106",
  "favorite_color": "Violet"
}, {
  "id": 92,
  "first_name": "Amelie",
  "last_name": "Perrottet",
  "email": "aperrottet2j@businesswire.com",
  "gender": "Female",
  "ip_address": "200.220.93.79",
  "favorite_color": "Teal"
}, {
  "id": 93,
  "first_name": "Ruthanne",
  "last_name": "Scawen",
  "email": "rscawen2k@hostgator.com",
  "gender": "Female",
  "ip_address": "232.71.132.28",
  "favorite_color": "Yellow"
}, {
  "id": 94,
  "first_name": "Suellen",
  "last_name": "MacCostye",
  "email": "smaccostye2l@yelp.com",
  "gender": "Female",
  "ip_address": "139.12.52.98",
  "favorite_color": "Teal"
}, {
  "id": 95,
  "first_name": "Cirstoforo",
  "last_name": "Perri",
  "email": "cperri2m@so-net.ne.jp",
  "gender": "Male",
  "ip_address": "24.27.205.54",
  "favorite_color": "Pink"
}, {
  "id": 96,
  "first_name": "Rayna",
  "last_name": "Battershall",
  "email": "rbattershall2n@prweb.com",
  "gender": "Female",
  "ip_address": "145.10.54.222",
  "favorite_color": "Orange"
}, {
  "id": 97,
  "first_name": "Lynea",
  "last_name": "Keiling",
  "email": "lkeiling2o@time.com",
  "gender": "Female",
  "ip_address": "221.119.150.163",
  "favorite_color": "Goldenrod"
}, {
  "id": 98,
  "first_name": "Christian",
  "last_name": "Iacovone",
  "email": "ciacovone2p@chronoengine.com",
  "gender": "Male",
  "ip_address": "171.234.77.227",
  "favorite_color": "Crimson"
}, {
  "id": 99,
  "first_name": "Clint",
  "last_name": "Margrett",
  "email": "cmargrett2q@tamu.edu",
  "gender": "Male",
  "ip_address": "252.92.120.219",
  "favorite_color": "Purple"
}, {
  "id": 100,
  "first_name": "Clarita",
  "last_name": "Wauchope",
  "email": "cwauchope2r@yelp.com",
  "gender": "Female",
  "ip_address": "9.237.107.64",
  "favorite_color": "Puce"
}]


function getDataFromTextArea() {
    users = JSON.parse(document.getElementById('myTextAres').value);
    console.log(users);
}

//How many Female and Male
function checkGender(users) {
    var gender = {
        male: 0,
        female: 0
    }
    for (var i = 0; i < users.length; i++) {
        if (users[i].gender === 'Male') {
            gender.male++;
        } else {
            gender.female++;
        }
    }
    return gender;
}

console.log(checkGender(users));



//How many favorite unique colors
var uniqueColor = [];
for (var i = 0; i < users.length; i++) {
    var favorite_color = users[i].favorite_color;
    if (uniqueColor.indexOf(favorite_color) === -1)
        uniqueColor.push(favorite_color);
}

console.log(uniqueColor);       


 
//How many each of color
var eachOfColors = {};
for (var i = 0; i < users.length; i++) {
    eachOfColors[users[i].favorite_color] = (eachOfColors[users[i].favorite_color] || 0) + 1;
}

console.log(eachOfColors);


        
//What is the most favorite color
function mostFavouriteColor() {
    var maxValue = Object.keys(eachOfColors)[0];

    for (var key in eachOfColors) {
        if (eachOfColors[key] > eachOfColors[maxValue]) {
            maxValue = key;
        }
    }
    return maxValue;
}


console.log(mostFavouriteColor(users));
        


//Find out not unique names first_name if there are such
var firstName = {};
for (var i = 0; i < users.length; i++) {
    firstName[users[i].first_name] = (firstName[users[i].first_name] || 0) + 1;
}
console.log(firstName);

function notUnique() {
    var mostCommon = [];
    for (var key in firstName) {
        if (firstName[key] > 1) {
            mostCommon.push(key);
        }
    }
    return mostCommon;
}

console.log(notUnique(users));
        
        
        
        

