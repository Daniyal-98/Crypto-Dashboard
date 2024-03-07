import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "./components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
     <Stack spacing="5rem">
     <SupportCard
        leftComponent={<ContactCard />}
        title="Contact Us"
        text=" Have a question or just want to know more? feel free to reach out to
        us."
        icon={IoMdMail}
      />

      <SupportCard
        leftComponent={
          <InfoCard
            inverted={true}
            imgUrl="/grid_bg.webp"
            tagText="Contact"
            text="Learn more about our real estate, mortgage, and corporate account services"
          />
        }
        title="Live Chat"
        text="Don't have time to wait for the answer? Chat with us."
        icon={AiTwotoneMessage}
      />
     </Stack>
    </DashboardLayout>
  );
};

export default Support;
