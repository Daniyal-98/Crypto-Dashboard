import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import Porfolio from "./components/Porfolio";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          xl: "repeat(2,1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={{
          base:"1",
          xl: "2",
        }}>
          <Porfolio />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
          inverted={false}
            imgUrl="/dot_bg.webp"
            text="Learn more about Loans - Keep your Bitcoins, access it's value selling it"
            tagText="Loan"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
          inverted={true}
            imgUrl="/grid_bg.webp"
            tagText="Contact"
            text="Learn more about our real estate, mortgage, and corporate account services"
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
