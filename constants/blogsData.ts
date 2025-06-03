// app/data/blogsData.ts

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string };

export type Blog = {
  slug: string;
  title: string;
  intro: string;
  publishDate: string; // ISO date
  category: string;
  tags: string[];       // e.g. ["latest","popular"]
  featuredImage: string;
  secondaryImage: string;
  content: ContentBlock[];
};

export const blogs: Blog[] = [
  {
    slug: "top-10-sneaker-trends-2025",
    title: "Top 10 Sneaker Trends to Watch in 2025",
    intro:
      "Discover the hottest sneaker styles this year: from chunky ’90s revivals to minimalist running silhouettes, we cover everything you need to stay ahead of the curve.",
    publishDate: "2025-06-07",
    category: "Trends",
    tags: ["latest", "popular"],
    featuredImage: "/images/blogs/blog-1-featured.jpg",
    secondaryImage: "/images/blogs/blog-1-secondary.jpg",
    content: [
      { type: "heading", text: "1. Chunky Dad Sneakers" },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga animi ratione tempora quidem dolorum cupiditate sequi, magnam quibusdam doloremque voluptates facilis quam autem inventore esse suscipit harum eum quod nulla!"
      },
      {
        type: "paragraph",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent nec varius purus. Integer sit amet nisl in purus accumsan tincidunt."
      },
      { type: "heading", text: "2. Minimalist Running Silhouettes" },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat adipisci ullam, ratione nemo provident saepe consectetur!"
      },
      {
        type: "paragraph",
        text: "Proin fermentum, eros at vehicula molestie, mauris erat consequat lacus, non laoreet mi purus at neque. Vivamus vehicula odio in quam congue, id ultrices erat feugiat."
      },
      { type: "heading", text: "3. Retro Basketball Reissues" },
      {
        type: "paragraph",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer euismod enim in nisl tincidunt bibendum."
      },
      {
        type: "paragraph",
        text: "Mauris non leo nec nisi scelerisque vulputate. Donec aliquet turpis ac tortor vulputate, at ultricies arcu sodales."
      }
    ]
  },

  {
    slug: "how-to-clean-your-sneakers",
    title: "How to Clean Your Sneakers: Step-By-Step Guide",
    intro:
      "Learn a foolproof, step-by-step method to remove dirt, stains, and odors from any sneaker material—canvas, leather, knit, and more.",
    publishDate: "2025-05-20",
    category: "Guides",
    tags: ["latest"],
    featuredImage: "/images/blogs/blog-2-featured.jpg",
    secondaryImage: "/images/blogs/blog-2-secondary.jpg",
    content: [
      { type: "heading", text: "Gather Your Supplies" },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga animi ratione tempora quidem dolorum cupiditate sequi, magnam quibusdam doloremque voluptates facilis quam autem inventore esse suscipit harum eum quod nulla."
      },
      {
        type: "paragraph",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer nec odio in diam fermentum ullamcorper."
      },
      { type: "heading", text: "Step 1: Remove Laces and Insoles" },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fugiat fuga, repudiandae sint quam doloremque ullam, omnis eaque, tenetur quod eligendi."
      },
      { type: "heading", text: "Step 2: Mix Cleaning Solution" },
      {
        type: "paragraph",
        text: "Combine warm water with a drop of mild detergent. Dip a soft brush or cloth into the solution and gently scrub the sneaker’s surface in circular motions."
      },
      {
        type: "paragraph",
        text: "Proin pharetra neque nec orci congue, ut placerat nisi sollicitudin. Nullam luctus velit vitae mi fermentum, at luctus est tristique."
      },
      { type: "heading", text: "Step 3: Dry and Reassemble" },
      {
        type: "paragraph",
        text: "Pat your sneakers with a dry towel to remove excess moisture. Stuff them with paper towels and let them air-dry in a well-ventilated area—never in direct sunlight."
      },
      {
        type: "paragraph",
        text: "Maecenas aliquet justo vel ipsum vehicula, vitae interdum nisl imperdiet. Duis vulputate sem a mi dictum, in commodo ipsum consequat."
      }
    ]
  },

  {
    slug: "best-roster-of-summer-sneakers",
    title: "The Ultimate Summer Sneaker Roster: Our Top Picks",
    intro:
      "Heat up your warm-weather rotation with these breathable, lightweight sneakers. From mesh slip-ons to low-cut canvas, here are our top 10 picks for summer 2025.",
    publishDate: "2025-05-05",
    category: "Reviews",
    tags: ["popular"],
    featuredImage: "/images/blogs/blog-3-featured.jpg",
    secondaryImage: "/images/blogs/blog-3-secondary.jpg",
    content: [
      { type: "heading", text: "1. XYZ Brand Mesh Slip-On" },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga animi ratione tempora quidem dolorum cupiditate sequi, magnam quibusdam doloremque voluptates facilis quam autem inventore esse suscipit harum eum quod nulla!"
      },
      {
        type: "paragraph",
        text: "Nullam sodales justo a urna lobortis, eu condimentum massa faucibus. Donec gravida velit lectus, eu facilisis mauris imperdiet vitae."
      },
      { type: "heading", text: "2. Classic Canvas Low-Tops" },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit accusamus recusandae dolorem, eligendi sit illo nam minus omnis quas saepe."
      },
      {
        type: "paragraph",
        text: "Vivamus in orci quis est aliquet laoreet. Quisque eget nisl id eros cursus accumsan eu in ligula."
      },
      { type: "heading", text: "3. Lightweight Knit Trainers" },
      {
        type: "paragraph",
        text: "Morbi cursus magna in dui sodales, eu dapibus elit malesuada. Integer molestie arcu vel purus tempus, sit amet scelerisque odio convallis."
      },
      {
        type: "paragraph",
        text: "Sed sit amet mauris id nulla aliquet sollicitudin. Aenean nec metus non metus auctor varius non vel odio."
      }
    ]
  },

  {
    slug: "sneaker-history-a-brief-overview",
    title: "A Brief History of Sneaker Culture",
    intro:
      "From rubber soles in the 1800s to today’s tech-driven performance models, we trace how sneakers evolved from athletic gear to a global fashion phenomenon.",
    publishDate: "2025-04-20",
    category: "Culture",
    tags: ["popular"],
    featuredImage: "/images/blogs/blog-4-featured.jpg",
    secondaryImage: "/images/blogs/blog-generic-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "The 19th Century: Birth of Rubber Soles"
      },
      {
        type: "paragraph",
        text: "In 1830, the first rubber-soled shoes appeared. They were heavy and utilitarian, but marked a turning point away from purely leather footwear."
      },
      {
        type: "paragraph",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, sit? Quisquam magni labore illo nisi explicabo architecto magni quod."
      },
      {
        type: "heading",
        text: "1920s–1960s: Rise of Athletic Brands"
      },
      {
        type: "paragraph",
        text: "As running and basketball grew in popularity, brands like Converse and Adidas introduced lightweight, canvas uppers and flexible soles."
      },
      {
        type: "paragraph",
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas fermentum ante vitae tempus ultrices."
      },
      {
        type: "heading",
        text: "1970s–1990s: Sneakers in Pop Culture"
      },
      {
        type: "paragraph",
        text: "Hip-hop and streetwear embraced sneakers as status symbols. The Nike Air Force 1 (1982) and Air Jordan 1 (1985) changed both basketball and fashion forever."
      },
      {
        type: "paragraph",
        text: "Mauris volutpat sapien sed ante facilisis, sed posuere lacus vehicula. Donec condimentum dui nec orci tincidunt, a porttitor est ultricies."
      }
    ]
  },

  {
    slug: "how-to-spot-fake-sneakers",
    title: "How to Spot Fake Sneakers: 5 Foolproof Tips",
    intro:
      "Counterfeit sneakers flood the market every year. Learn how to identify authentic pairs by examining stitching, packaging, serial numbers, and more.",
    publishDate: "2025-04-02",
    category: "Guides",
    tags: ["latest"],
    featuredImage: "/images/blogs/blog-5-featured.jpg",
    secondaryImage: "/images/blogs/blog-generic-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "Tip 1: Examine the Box and Labels"
      },
      {
        type: "paragraph",
        text: "Authentic sneakers come in high-quality boxes with crisp printing. Check for spelling errors and compare the label font to an official brand sample."
      },
      {
        type: "heading",
        text: "Tip 2: Inspect the Stitching"
      },
      {
        type: "paragraph",
        text: "Counterfeits often have uneven stitching or glue residue along seams. Genuine pairs use tight, uniform stitches and clean finishing."
      },
      {
        type: "heading",
        text: "Tip 3: Verify the Serial Number"
      },
      {
        type: "paragraph",
        text: "Each authentic sneaker has a unique serial code. Compare it against the brand’s official directory if available. If it’s missing or duplicated, it’s likely a fake."
      },
      {
        type: "heading",
        text: "Tip 4: Feel the Insole and Materials"
      },
      {
        type: "paragraph",
        text: "Run your hand over the sole and materials. Real leather or high-grade knit has a certain texture. Fake materials can feel plasticky or too rough."
      },
      {
        type: "heading",
        text: "Tip 5: Compare with a Verified Retailer"
      },
      {
        type: "paragraph",
        text: "Whenever in doubt, visit an authorized retailer and compare side by side. Lighting, color, and shape can be subtle giveaways."
      }
    ]
  },

  {
    slug: "sustainable-sneakers-on-the-rise",
    title: "Sustainable Sneakers on the Rise: Eco-Friendly Picks",
    intro:
      "More brands are committing to sustainability. Discover our top eco-friendly sneaker picks made from recycled materials, organic cotton, and vegan leather.",
    publishDate: "2025-03-25",
    category: "Reviews",
    tags: ["latest", "popular"],
    featuredImage: "/images/blogs/blog-6-featured.jpg",
    secondaryImage: "/images/blogs/blog-generic-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "1. GreenKicks Recycled Collection"
      },
      {
        type: "paragraph",
        text: "GreenKicks uses 100% recycled plastic bottles for the upper and natural rubber for the outsole. Each pair saves nearly 5 bottles from landfills."
      },
      {
        type: "heading",
        text: "2. EcoStep Vegan Runner"
      },
      {
        type: "paragraph",
        text: "Crafted with vegan leather and eco-friendly foam, the EcoStep Runner boasts a 20% carbon footprint reduction compared to traditional models."
      },
      {
        type: "heading",
        text: "3. TerraSole Organic Canvas"
      },
      {
        type: "paragraph",
        text: "The TerraSole is made from GOTS-certified organic cotton with water-based dyes. Perfect for those who want a minimalistic, breathable summer shoe."
      },
      {
        type: "heading",
        text: "4. ReNew Tech Knit Sneaker"
      },
      {
        type: "paragraph",
        text: "A fully knitted upper from recycled polyester yarn with a biodegradable sole. Lightweight, flexible, and planet-friendly."
      }
    ]
  },

  {
    slug: "best-sneaker-storage-solutions",
    title: "Best Sneaker Storage Solutions to Preserve Your Collection",
    intro:
      "A proper storage setup is key to keeping kicks looking fresh. From UV-blocking display boxes to humidity-controlled closets, find the best way to protect your investment.",
    publishDate: "2025-03-05",
    category: "Guides",
    tags: ["popular"],
    featuredImage: "/images/blogs/blog-7-featured.jpg",
    secondaryImage: "/images/blogs/blog-generic-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "UV-Blocking Display Cases"
      },
      {
        type: "paragraph",
        text: "These acrylic cases shield your sneakers from harmful UV rays, preventing color fade over time. Each case has a carbon filter to block sunlight."
      },
      {
        type: "heading",
        text: "Stackable Clear Shoeboxes"
      },
      {
        type: "paragraph",
        text: "Transparent, ventilated shoeboxes help you see your pairs at a glance. Stack them neatly to save space, and keep humidity-absorbent packets inside."
      },
      {
        type: "heading",
        text: "Climate-Controlled Cabinets"
      },
      {
        type: "paragraph",
        text: "For the serious collector, a humidity-controlled sneaker cabinet maintains an optimal range (45–55% humidity) to prevent mildew and sole degradation."
      },
      {
        type: "heading",
        text: "Shoe Trees and Deodorizers"
      },
      {
        type: "paragraph",
        text: "Wooden shoe trees help sneakers retain shape. Natural deodorizers (activated charcoal pouches) keep moisture at bay and remove lingering odors."
      }
    ]
  },

  {
    slug: "streetwear-and-sneaker-collabs-2025",
    title: "Streetwear & Sneaker Collabs You Can’t Miss in 2025",
    intro:
      "This year’s hyped collaborations are redefining sneaker culture—from high-fashion designers dropping limited runs to street brands teaming with sports icons.",
    publishDate: "2025-02-20",
    category: "Culture",
    tags: ["latest"],
    featuredImage: "/images/blogs/blog-8-featured.jpg",
    secondaryImage: "/images/blogs/blog-generic-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "Supreme x Nike SB Dunk Low"
      },
      {
        type: "paragraph",
        text: "Supreme’s neon camo print on the Nike SB Dunk Low marries streetwear sensibilities with skate culture. Only 5,000 pairs were made, so they sold out in minutes."
      },
      {
        type: "heading",
        text: "BAPE x Adidas Ultra Boost"
      },
      {
        type: "paragraph",
        text: "BAPE’s iconic shark camo meets Adidas’s Boost technology. The eye-catching pattern is set against a light grey Primeknit upper with gold accents."
      },
      {
        type: "heading",
        text: "Off-White x Jordan 1 Retro High"
      },
      {
        type: "paragraph",
        text: "Virgil Abloh’s signature deconstructed look on the Jordan 1 uses shredded leather overlays and oversized branding—making it an instant collector’s item."
      },
      {
        type: "heading",
        text: "Palace x New Balance 550"
      },
      {
        type: "paragraph",
        text: "Palace’s vintage roller-skate-inspired colorway on the 550 silhouette blends pastel blues and pinks with classic New Balance comfort."
      }
    ]
  },

  {
    slug: "how-to-break-in-new-sneakers",
    title: "How to Break In New Sneakers Without Pain",
    intro:
      "New kicks can rub you the wrong way—literally. Follow these pro tips to break in your sneakers comfortably and avoid blisters.",
    publishDate: "2025-02-01",
    category: "Guides",
    tags: ["latest"],
    featuredImage: "/images/blogs/blog-9-featured.jpg",
    secondaryImage: "/images/blogs/blog-generic-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "1. Wear Thick Socks"
      },
      {
        type: "paragraph",
        text: "Start by wearing a pair of thick—or two layers of—socks. This extra padding helps stretch the material gently as you walk around."
      },
      {
        type: "heading",
        text: "2. Use a Sneaker Stretcher"
      },
      {
        type: "paragraph",
        text: "Insert a shoe stretcher into your sneakers overnight. Adjust it slightly each day until the shoe gives just enough to reduce friction points."
      },
      {
        type: "heading",
        text: "3. Apply Leather Conditioner (If Applicable)"
      },
      {
        type: "paragraph",
        text: "For leather uppers, massage a small amount of conditioner into tight areas. Let it absorb before wearing; this softens the material and prevents cracks."
      },
      {
        type: "heading",
        text: "4. Gradual Wear Indoors First"
      },
      {
        type: "paragraph",
        text: "Wear your new sneakers around the house for short intervals. This controlled environment lets you address hot spots before you head outside."
      },
      {
        type: "heading",
        text: "5. Take Short Walks Daily"
      },
      {
        type: "paragraph",
        text: "Increase walking time by 10–15 minutes each day. If any part starts to rub uncomfortably, pause and apply a thin bandage or anti-blister product before continuing."
      }
    ]
  },

  {
    slug: "sneaker-investment-guide-2025",
    title: "Sneaker Investment Guide: Rarest Picks for 2025",
    intro:
      "Collecting rare sneakers can be a lucrative hobby. Here are this year’s most sought-after pairs—check resell values and how to authenticate before you buy.",
    publishDate: "2025-01-15",
    category: "Culture",
    tags: ["popular"],
    featuredImage: "/images/blogs/blog-10-featured.jpg",
    secondaryImage: "/images/blogs/blog-generic-secondary.jpg",
    content: [
      {
        type: "heading",
        text: "Jordan 1 Retro High OG “Lost & Found”"
      },
      {
        type: "paragraph",
        text: "The “Lost & Found” Jordan 1 pays tribute to Michael Jordan’s forgotten home address. Only 2,000 pairs exist, and resale prices soared past $5,000."
      },
      {
        type: "heading",
        text: "Travis Scott x Nike SB Dunk Low"
      },
      {
        type: "paragraph",
        text: "This collaboration features a reverse Swoosh and hidden stash pocket. With limited releases, collectors saw prices climb above $4,000 within weeks."
      },
      {
        type: "heading",
        text: "Nike Mag “Back to the Future” 2016"
      },
      {
        type: "paragraph",
        text: "A true grail, the Nike Mag replicates the 2015 self-lacing design. Only 89 pairs were auctioned for charity, each fetching over $30,000 at release."
      },
      {
        type: "heading",
        text: "Adidas Yeezy Boost 750 OG “Light Brown”"
      },
      {
        type: "paragraph",
        text: "Kanye West’s first Yeezy silhouette introduced the mid-top strap. The original “Light Brown” release commands over $2,500 on the secondary market."
      }
    ]
  }
];
