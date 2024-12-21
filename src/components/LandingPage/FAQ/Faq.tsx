import { Box } from "@chakra-ui/react";
import { SectionTitle } from "@/components/section-title";
import { FaqAccordion } from "@/components/ui/accordion";

export const QUESTIONS = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "We provide a comprehensive range of moving services,including residential and commercial moves, packing and unpacking, storage solutions, and specialized transportation for items like pianos, antiques, and artwork. Our goal is to make your move as smooth and stress-free as possible",
  },
  {
    id: 2,
    question: "How do you determine the cost of a move?",
    answer:
      "The cost of a move is based on factors such as the volume of items, the distance between locations, and any additional services you request. We offer a detailed estimate through a phone consultation or an in-home survey to ensure transparency and accuracy.",
  },
  {
    id: 3,
    question: "Do you offer packing services?",
    answer:
      "Yes, we offer both full and partial packing services. Our team can handle all aspects of packing, from supplying materials to carefully packing and labeling your items to ensure they’re protected during transit.",
  },
  {
    id: crypto.randomUUID(),
    question: "Is my move insured?",
    answer:
      "Yes, all our moves include basic liability coverage. For additional peace of mind, we offer optional insurance plans that provide more comprehensive protection for your belongings during the move. Please ask us for details about coverage options.",
  },
  {
    id: crypto.randomUUID(),
    question:
      "Can you accommodate unusual moving times, like overnightor very early?",
    answer:
      "Absolutely! At Bindle Bundle Movers, we understand that every client’s schedule is different. We offer flexible moving times, including overnight or early-morning moves, to minimize disruption and meet your unique needs. Just let us know your preferred schedule, and we’ll make the necessary arrangements.",
  },
  {
    id: crypto.randomUUID(),
    question: "Do you help with disassembling and reassembling furniture?",
    answer:
      " Yes, we do! Our team is trained to disassemble and reassemble a wide variety of furniture, from beds to dining tables and more. We come equipped with the tools and expertise needed to handle your items carefully and efficiently, ensuring everything is set up properly at your new location.",
  },
  {
    id: crypto.randomUUID(),
    question: "Can you handle last-minute or emergency moves?",
    answer:
      " Yes, we specialize in providing quick, reliable service for last-minute or emergency moves. Our team is always ready to step in, even on short notice. Contact us as soon as possible, and we’ll do everything we can to accommodate your timeline and ensure a smooth move.",
  },
];

export const FAQs = () => {
  return (
    <Box
      marginY={"2em"}
      width={{ base: "100%", md: "779px" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      gap={{ base: "0px", md: "43px" }}
      overflowY={"scroll"}
      height={{ md: "500px" }}
    >
      <SectionTitle text="Frequently Asked Questions" color="#383838" />

      <Box
        width={"99%"}
        marginY={"1em"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"start"}
        alignItems={{ lg: "start", base: "", md: "" }}
        gapY={"20px"}
      >
        {QUESTIONS.map((item) => {
          return (
            <FaqAccordion title={item.question} key={item.id}>
              <Box>{item.answer}</Box>
            </FaqAccordion>
          );
        })}
      </Box>
    </Box>
  );
};
