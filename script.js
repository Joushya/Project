// Articles data
const articles = [
    {
        id: 1,
        title: "Exploring the Future of AI",
        category: "technology",
        image: "https://imageio.forbes.com/specials-images/imageserve/6704593b31c6ab97b4e24c89/Businessman-touching-the-brain-working-of-Artificial-Intelligence--AI---Automation-/960x0.jpg?format=jpg&width=960",
        content: "Artificial intelligence is shaping the future with remarkable innovations.",
      },
      {
        id: 2,
        title: "Top Travel Destinations for 2024",
        category: "travel",
        image: "https://www.mhainde.org/wp-content/uploads/iStock-1285301614-1080x675.jpg",
        content: "Discover the most breathtaking destinations to visit in 2024.",
      },
      {
        id: 3,
        title: "Lifestyle Hacks for a Happier You",
        category: "lifestyle",
        image: "https://www.investopedia.com/thmb/tw8T1piPDkZEmIt8AcjhDk6b_sc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1648880480-5fae58fc9abe48f8a984afac55e65bc6.jpg",
        content: "Simple lifestyle changes to improve your happiness and well-being.",
      },
      {
        id: 4,
        title: "The Rise of Quantum Computing",
        category: "technology",
        image: "https://scitechdaily.com/images/Silicon-Photonics-Quantum-Networking-Art.jpg",
        content: "Quantum computing is set to revolutionize industries worldwide.",
      },
    {
      id: 1,
      title: "Exploring Business",
      category: "technology",
      image: "https://www.salesforce.com/in/blog/wp-content/uploads/sites/9/2021/09/crucial-small-business-departments-need-to-succeed.jpg",
      content: "An organization or enterprising entity engaged in commercial, industrial, or professional activities.",
    },
    {
      id: 2,
      title: "Improvisation of Healthcare standards",
      category: "travel",
      image: "https://etimg.etb2bimg.com/thumb/msid-107843645,imgsize-71684,width-1200,height=765,overlay-ethealth/industry/role-of-medical-education-in-shaping-quality-healthcare-infrastructure.jpg",
      content: "The organized provision of medical services to maintain or improve individuals' health.",
    },
    {
      id: 3,
      title: "Law enforcement",
      category: "lifestyle",
      image: "https://ijlsi.com/wp-content/uploads/Rule-of-Law.jpg",
      content: "A system of rules established by a governing authority to regulate behavior and maintain order within a society.",
    },
    {
      id: 4,
      title: "Rise in Army",
      category: "technology",
      image: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/15/full/1686837465-1355.jpg",
      content: "A nation's primary military force responsible for land-based military operations.",
    },

  ];
  
  // Function to load articles dynamically
  function loadArticles(filter = "all") {
    const articlesSection = document.getElementById("articles");
    articlesSection.innerHTML = ""; // Clear existing content
  
    articles
      .filter(article => filter === "all" || article.category === filter)
      .forEach(article => {
        const articleHTML = `
          <div class="article">
            <img src="${article.image}" alt="${article.title}">
            <div class="article-content">
              <h2>${article.title}</h2>
              <p>${article.content}</p>
            </div>
          </div>
        `;
        articlesSection.innerHTML += articleHTML;
      });
  }
  
  // Function to filter articles by category
  function filterCategory(category) {
    loadArticles(category);
  }
  
  // Load all articles on page load
  document.addEventListener("DOMContentLoaded", () => loadArticles());
  