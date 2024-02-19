import {
  Box,
  Card,
  Layout,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";


export default function AdditionalPage() {
  return (
    <Page>
      <ui-title-bar title="Tabs page" />
      <Layout>

        <Layout.Section>
          <Card>
            <BlockStack gap="300">
              <Text as="p" variant="bodyMd">The app template for Tabs.</Text>
              <Text as="p" variant="bodyMd">Create tabs section for DPP from customizer.</Text>
              <Text as="p" variant="bodyMd">Product Handle:</Text>
            </BlockStack>
          </Card>
        </Layout.Section>

        <Layout.Section variant="oneThird">
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Resources
              </Text>
              <List>
                <List.Item>
                  <Text as="p" variant="bodyMd">Text text</Text>
                </List.Item>
              </List>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
