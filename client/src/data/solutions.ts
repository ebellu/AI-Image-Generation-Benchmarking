export interface Solution {
  id: string;
  name: string;
  company: string;
  companyColor: string;
  description: string;
  overallScore: number;
  qualityDescription: string;
  controlDescription: string;
  apiDescription: string;
  featuresDescription: string;
  pros: string[];
  cons: string[];
  examplePrompts: {
    promptSummary: string
    prompt: string;
    imageUrl: string;
  }[];
  recommendations: string;
}

export const solutions: Solution[] = [
  {
    id: "dalle3",
    name: "DALL·E 3",
    company: "OpenAI",
    companyColor: "blue",
    description: "Text-to-image model from OpenAI with high-fidelity output and improved understanding of user prompts.",
    overallScore: 6.8,
    qualityDescription: "Shows impressive detail and prompt comprehension, excelling in style transfer and handling text generation in complex scenes. Its main limitations lie in generating people within complicated compositions and achieving photorealism on par with other leading models.",
    controlDescription: "Limited configurability and control over the image generation. While the model interprets user prompts effectively, the only available parameters are: prompt, number of images, size. There are fewer image resolutions and aspect ratios if compared to other solutions. Custom model training and fine-tuning are not supported.",
    apiDescription: "Well documented, cloud-based API. Compatible with Python and Javascript.",
    featuresDescription: "Inpainting and image editing with masks.",
    pros: [
      "Usability",
      "Prompt understanding and handling of complex requests",

    ],
    cons: [
      "Limited fine-grained control",
      "Limited multi-modality support",
      "No async support",
      "Less photorealistic than other solutions"
    ],
    recommendations: "Ideal for beginners and users looking to create imaginative, illustrative, or conceptual visuals with ease, and not needing much control over the final result.",
    examplePrompts: [
      {
        promptSummary:"",
        prompt: "A candid portrait of an elderly woman with deep wrinkles and piercing blue eyes, standing in a foggy forest at dawn, ultra-realistic photography style, 85mm lens, natural lighting.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/dalle_oldwoman.jpg?updatedAt=1749056208186"
      },
      {
        promptSummary:"",
        prompt: "An illustration of a human heart made of translucent glass, standing on a pedestal amidst a stormy sea. Rays of sunlight pierce the clouds, illuminating the heart, revealing a tiny universe within. The quote 'Find the universe within you' is etched in bold letters across the horizon.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/dalle_text.png?updatedAt=1749056211126"
      },
      {
        promptSummary:"",
        prompt: "Pixel art scene of Coit Tower standing tall on Telegraph Hill, with a panoramic view of the city below and birds flying around.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/dalle_style.png?updatedAt=1749056211127"
      }
    ],
  },
  {
    id: "imagen4",
    name: "Imagen 4",
    company: "Google DeepMind",
    companyColor: "orange",
    description: "Google's latest text-to-image model, while still in the early stages of testing, appears to excel at generating photorealistic, high-quality images.",
    overallScore: 8.5,
    qualityDescription: "The model delivers excellent detail and accuracy, particularly excelling at photorealistic images. However, it can produce artifacts in complex compositions, especially in images containing small faces or text, and often struggles to keep subjects properly centered.",
    controlDescription: "Limited customization. Control over image generation through text prompts. Generation can be guided with reference images, too. Users can control these aspects: number of images, aspect ratio, seed, safety filters, person generation, digital watermarking, negative prompting.",
    apiDescription: "Imagen 3: Well documented API accessible via VertexAI. Compatible Python and REST. Imagen 4: Experimental APIs with reduced functionalities. Access limited to a few testers.",
    featuresDescription: " Inpainting, outpainting, style transfer, mask-free editing, product editing, upscaling, customization starting from reference images.",
    pros: [
      "Prompt understanding and handling of complex requests",
      "Handles photographic style very well"
    ],
    cons: [
      "Imagen 4 not yet available for everyone",
      "Artefacts on complicated compositions, especially in images with small faces and text rendering",
      "Struggles to create centered images",
      "Unpredictable outcomes with nonsensical prompts"
    ],
    recommendations:"A great choice for beginners and anyone seeking highly photorealistic, real-world imagery. Particularly strong in delivering natural-looking visuals.",
    examplePrompts: [
      {
        promptSummary:"Create a cinematic, photorealistic medium shot capturing the nostalgic warmth of a late 90s indie film. The focus is a young woman with brightly dyed pink",
        prompt: "(slightly faded) and freckled skin, looking directly and intently into the camera lens with a hopeful yet slightly uncertain smile. She wears an oversized, vintage band t-shirt (slightly worn) over a long-sleeved striped top and simple silver stud earrings. The lighting is soft, golden hour sunlight streaming through a slightly dusty window, creating lens flare and illuminating dust motes in the air. The background shows a blurred, cluttered bedroom with posters on the wall and fairy lights, rendered with a shallow depth of field. Natural film grain, a warm, slightly muted color palette, and sharp focus on her expressive eyes enhance the intimate, authentic feel.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/imagen_girl.jpg?updatedAt=1749051587578"
      },
      {
        promptSummary:"This intimate close-up photograph focuses intensely on a vintage-style paper packet designed for holding perhaps half a dozen eggs, immediately immersing the",
        prompt: "viewer in a sense of rustic nostalgia reminiscent of small, independent farms and simpler times. The camera angle is slightly elevated, looking down onto the packet which rests invitingly on a surface like subtly weathered barn wood or a simple, pale yellow gingham kitchen cloth, grounding it in a homey context. The paper itself possesses a tangible, pleasing texture — perhaps a slightly rough, unbleached kraft paper feel, with subtle creases or soft folds that suggest gentle handling. The primary graphic, rendered in a charmingly imperfect, faded print style evocative of mid-century commercial art, depicts a heartwarming pastoral scene: a few plump, free-roaming hens rendered in warm, earthy tones of brown and cream peck contentedly near a quaint, hand-drawn red barn illustration against a backdrop of softly rolling green hills under a pale, hopeful sky. Simple, slightly distressed typography, possibly a friendly, rounded sans-serif or a classic, trustworthy serif font, clearly labels it 'Golden Yolk Farm Eggs' or 'Direct From Our Coop,' emphasizing freshness and natural origins. The lighting is soft and warm, akin to gentle morning sunlight filtering through a nearby window, casting delicate shadows that accentuate the packet's humble form and the slightly raised texture of the ink. The shallow depth of field renders the immediate background — the distinct wood grain or the soft fabric pattern — into a gentle blur, ensuring the packaging itself, with its evocative design and palpable authenticity, remains the sole, captivating focus, powerfully conjuring feelings of wholesome goodness, connection to the land, and the quiet promise of a farm-fresh breakfast.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/imagen_text.jpg?updatedAt=1749051587661"
      },
      {
        promptSummary:"Up close the flowing forms reveal themselves to be composed of tightly woven silk threads that catch and reflect light with a subtle iridescence the cool pastel",
        prompt: "colors are interwoven creating a textured surface with a delicate shimmer the shimmering silvers appear as highlights along the thread strands giving a sense of movement and sheen the subtle lavender and peach emerge as contrasting threads or areas of slightly different weave translucent droplets or small smooth knots of a different perhaps more lustrous silk are incorporated adding textural variation the overall impression is one of luxurious softness intricate detail and a gentle flowing drape the woven texture adds a tactile dimension contrasting with the smooth sheen of the iridescent threads the way the light catches the individual fibers creates a dynamic interplay of highlights and shadows adding depth to the flowing forms the subtle variations in the weave and color create a rich and complex surface that invites closer inspection the translucent droplets or knots add a touch of unexpected smoothness and reflect light in unique ways the overall effect is one of refined elegance and delicate beauty a testament to the artistry of textile creation",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/imagen_wool.jpg?updatedAt=1749051588472"
      }
    ]
  },
  {
    id: "midjourney",
    name: "Midjourney v7",
    company: "Midjourney Inc",
    companyColor: "purple",
    description: "Discord and web-based AI image generator known for its artistic quality and stylized results",
    overallScore: 8,
    qualityDescription: "High aesthetic quality and artistic style rendition. However, it might struggle with text and prompt adherence.",
    controlDescription: "Good control control over image generation through a text prompt and parameters (--), such as: aspect ratio, negative prompt, quality, seed, style, tiling, ... Good configurability through commands (/).",
    apiDescription: "No official API available.",
    featuresDescription: "Upscaling, pan, zoom, variations, remix, inpainting, outpainting. Personalization from input images (character, style, omni references). Assisted edition with an editor.",
    pros: [
      "Good control through parameters",
      "Lots of formats available",
      "Active community providing prompt techniques and support"
    ],
    cons: [
      "Limited access through web or Discord only",
      "No free version or trial",
      "Might struggle with prompt adherence"
    ],
    recommendations:"Perfect for professional artists and designers prioritizing aesthetic, stylistic, and artistic quality, without the need for API integration.",
    examplePrompts: [
      {
        promptSummary:"",
        prompt: "A highly detailed and realistic portrait of a elderly woman in a cozy home, showcasing their joy and casual clothing. The image captures the expressive eyes and soft natural light to highlight the subject's personality and mood. Taken with a Canon EOS R5 and an 85mm f/1.2 lens, the portrait emphasizes the fine details of the individual's appearance and the atmosphere of the setting, creating a lifelike and engaging depiction. --v 6.1 --q 2 --s 100 --ar 1:1 --style raw",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/midjourney_oldwoman.png?updatedAt=1749055683229"
      },
      {
        promptSummary:"",
        prompt: "Retro Windows 98 pop-up error window with text 'Feelings not found', pixel art style, early internet aesthetic, light glitchy background --v 7 --stylize 50",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/midj_text(1).png?updatedAt=1749066893714"
      },
      {
        promptSummary:"",
        prompt: "Create an ant with the flowers wings, he sitting on the hand of the person, magical, micro intricate organic skin texture, shoot on kodac porta film --ar 3:4 --v 7 --stylize 550",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/mdj_style.png?updatedAt=1749067379174"
      }
    ],
  },
  {
    id: "stablediffusion",
    name: "Stable Diffusion 3.5",
    company: "Stability AI",
    companyColor: "green",
    description: "Open-source diffusion model that can be self-hosted with many customization options and active community support",
    overallScore: 8.5,
    qualityDescription: "Handles artistic styles well, but is less photorealistic compared to other solutions, without heavy prompt engineering. It might struggle with generating accurate text and people, too.",
    controlDescription: "Good control over image generation, with the following parameters: positive and negative prompts, strength, aspect ratio, seed, CFG, style, sampling steps, sampler. Maximum customization: you can fine-tune the model to meet your needs, or build applications based on customized workflows.",
    apiDescription: "APIs can be self-hosted. There are also APIs hosted over the internet compatible with Javascript, Php, Python, Node, Java, REST.",
    featuresDescription: "Image-to-image, inpainting, upscaling, editing (outpainting, blip_diffusion, mix, depth map generation, guided editing, background removal, masks, super resolution, mixer, multiview, ...), supports ControlNets and LoRAs.",
    pros: [
      "Great customization and control",
      "Self-hostable with no ongoing costs after setup",
      "Community support",
      "Rich ecosystem of tools using this model (e.g, ComfyUI, DeepInfra, Replicate, ...)"
    ],
    cons: [
      "With self-hosting, performance depends on the user's hardware",
      "Steep learning curve "
    ],
    recommendations:"Recommended for developers, technical users, and enterprises needing extensive customization, private deployment options, and complex, scalable workflows. ",
    examplePrompts: [
      {
        promptSummary:"",
        prompt: "Magical realism photo portrait, soft morning light, 30-something brunette woman, #hipster fashion, candid, hip. Negative: smooth, neon, 3D render.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/stablediff_person.jpg"
      },
      {
        promptSummary:"",
        prompt: "Watercolor painting of a nostalgic 1950s diner, with neon signs glowing outside and people enjoying milkshakes at the counter.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/stablediff_text.jpg"
      },
      {
        promptSummary:"",
        prompt: "Stylistic, 3D render of a cute tiny robot sitting with a puppy on a couch, surrounded by colorful sticky notes.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/stablediff_style.jpg"
      }
    ],
  },
  {
    id: "firefly",
    name: "Firefly Image 4",
    company: "Adobe",
    companyColor: "pink",
    description: "Creative AI tool from Adobe with a focus on professional content creation, commercial safety, and Creative Cloud integration.",
    overallScore: 7,
    qualityDescription: "Good quality even with photorealistic scenes. It tends to struggle with following prompts precisely, managing complex scenes, and generating text.",
    controlDescription: "Image control is achievable through text prompts, input images, and adjustable parameters such as aspect ratio, intensity, style, composition, color palette, lighting, and camera angle. Additionally, image editing is further supported  (without AI) via Creative Cloud integration. Limited configurability.",
    apiDescription: "Documented API compatible with REST and Node SDK",
    featuresDescription: "Inpainting, outpainting, upscaling, background swap, 3D scene to image, generation starting from reference images, text to SVG, SVG fill",
    pros: [
      "Commercial-safe content with proper licensing",
      "Integration with Adobe Creative Cloud",
      "Built for professional creative workflows"
    ],
    cons: [
      "Unable to use Firefly features with Shared Device Licenses",
      "Limited prompt adherence",
      "Prompt adjustments require regeneration",
      "Distored text and unrealistic body features"
    ],
    recommendations:"Best suited for professional creatives who value speed, because of its integration within the Adobe Creative Suite. Well-suited for commercial projects requiring copyright-safe content, too.",
    examplePrompts: [
      {
        promptSummary:"",
        prompt: "A candid portrait of an elderly woman with deep wrinkles and piercing blue eyes, standing in a foggy forest at dawn, ultra-realistic photography style, 85mm lens, natural lighting.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/firefly_oldwoman.jpg"
      },
      {
        promptSummary:"",
        prompt: "A colored sketch of a cosmic scene with quirky astronauts, wacky alien creatures, floating planets, swirling galaxies, and rockets covered in zany designs. Add humorous details like smiling stars and planets with sunglasses.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/firefly_style(1).jpg"
      },
      {
        promptSummary:"",
        prompt: "A hyper-realistic image of a present-day city street at night in the rain. Reflections shimmer on the wet pavement. There are vibrant neon signs of shops, restaurants, and bars. The scene feels cinematic, evoking the style of Blade Runner and cyberpunk cityscapes.",
        imageUrl: "https://ik.imagekit.io/n25vnbxgep/firefly_city.jpg"
      }
    ],
  }
];