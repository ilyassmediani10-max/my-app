import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const navigation = [
  { title: "Home", items: ["Overview"] },
  {
    title: "Clients",
    items: ["Client List", "Client Details", "Client Orders"],
  },
  {
    title: "Orders",
    items: [
      "Order List",
      "Expired Orders",
      "Orders Expiring This Month",
      "Order Deadlines",
    ],
  },
  {
    title: "Materials",
    items: ["Material List", "Materials by Order", "Material Usage"],
  },
  {
    title: "Costs",
    items: ["Order Prices", "Material Costs", "Total Material Costs"],
  },
  {
    title: "Reports",
    items: [
      "Client Report",
      "Order Report",
      "Material Requirements Report",
      "Cost Summary",
    ],
  },
];

const summary = [
  { label: "Clients", value: "38", detail: "Active renovation customers" },
  { label: "Orders", value: "64", detail: "12 open this month" },
  { label: "Expired", value: "7", detail: "Need deadline review" },
  { label: "Material cost", value: "$18.4k", detail: "Planned total" },
];

const orders = [
  {
    number: "ORD-1048",
    client: "Nadia Petrova",
    service: "Kitchen renovation",
    price: "$4,800",
    deadline: "May 22",
    status: "Expires this month",
  },
  {
    number: "ORD-1039",
    client: "Adam Lewis",
    service: "Bathroom repair",
    price: "$2,150",
    deadline: "May 12",
    status: "Expired",
  },
  {
    number: "ORD-1054",
    client: "Sara Ahmed",
    service: "Floor replacement",
    price: "$3,400",
    deadline: "June 3",
    status: "On track",
  },
];

const materials = [
  {
    order: "ORD-1048",
    material: "Ceramic tiles",
    price: "$32",
    used: "48 m2",
    planned: "52 m2",
  },
  {
    order: "ORD-1048",
    material: "Adhesive mix",
    price: "$18",
    used: "9 bags",
    planned: "11 bags",
  },
  {
    order: "ORD-1039",
    material: "Waterproof board",
    price: "$24",
    used: "22 pcs",
    planned: "20 pcs",
  },
];

const reportLinks = [
  "Client Report",
  "Order Report",
  "Material Requirements Report",
  "Cost Summary",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="grid min-h-screen lg:grid-cols-[292px_1fr]">
        <aside className="hidden border-r bg-background lg:block">
          <div className="flex h-16 items-center border-b px-6">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              C
            </div>
            <div className="ml-3">
              <p className="text-sm font-semibold">Client Works</p>
              <p className="text-xs text-muted-foreground">Renovation orders</p>
            </div>
          </div>
          <nav className="h-[calc(100vh-4rem)] overflow-y-auto p-4">
            {navigation.map((section) => (
              <div className="mb-5" key={section.title}>
                <a
                  className={
                    section.title === "Home"
                      ? "mb-2 flex rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground"
                      : "mb-2 flex px-3 text-xs font-semibold uppercase text-muted-foreground"
                  }
                  href={`#${section.title.toLowerCase()}`}
                >
                  {section.title}
                </a>
                {section.title !== "Home" ? (
                  <div className="grid gap-1">
                    {section.items.map((item) => (
                      <a
                        className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                        key={item}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </aside>

        <section className="flex min-w-0 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur md:px-6">
            <div className="lg:hidden">
              <div className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
                C
              </div>
            </div>
            <Input
              className="max-w-md"
              placeholder="Search client number, order number, material"
            />
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" className="hidden sm:inline-flex">
                Add client
              </Button>
              <Button>New order</Button>
            </div>
          </header>

          <div className="mx-auto w-full max-w-7xl flex-1 space-y-6 p-4 md:p-6">
            <section
              className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
              id="home"
            >
              <div>
                <Badge>Client service management</Badge>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight">
                  Renovation Orders Dashboard
                </h1>
                <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
                  Manage clients, order deadlines, material usage, planned
                  quantities, and cost reports from one workspace.
                </p>
              </div>
              <Button variant="secondary">Generate report</Button>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {summary.map((item) => (
                <Card key={item.label}>
                  <CardHeader className="pb-2">
                    <CardDescription>{item.label}</CardDescription>
                    <CardTitle className="text-3xl">{item.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
              <Card id="orders">
                <CardHeader>
                  <CardTitle>Order List</CardTitle>
                  <CardDescription>
                    Includes expired orders and orders expiring this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto rounded-md border">
                    <div className="min-w-[780px]">
                      <div className="grid grid-cols-[120px_1fr_1fr_100px_100px_160px] gap-4 border-b bg-muted/50 px-4 py-3 text-xs font-medium text-muted-foreground">
                        <span>Order no.</span>
                        <span>Client</span>
                        <span>Task</span>
                        <span>Price</span>
                        <span>Deadline</span>
                        <span>Status</span>
                      </div>
                      {orders.map((order) => (
                        <div
                          className="grid grid-cols-[120px_1fr_1fr_100px_100px_160px] gap-4 border-b px-4 py-4 text-sm last:border-b-0"
                          key={order.number}
                        >
                          <span className="font-medium">{order.number}</span>
                          <span>{order.client}</span>
                          <span className="text-muted-foreground">
                            {order.service}
                          </span>
                          <span>{order.price}</span>
                          <span className="text-muted-foreground">
                            {order.deadline}
                          </span>
                          <span>
                            <Badge
                              className={
                                order.status === "Expired"
                                  ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                                  : "bg-background text-foreground"
                              }
                            >
                              {order.status}
                            </Badge>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="clients">
                <CardHeader>
                  <CardTitle>Client Details</CardTitle>
                  <CardDescription>
                    Core fields for each individual client record.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    ["Client number", "CL-0028"],
                    ["Client name", "Nadia Petrova"],
                    ["Address", "18 Maple Street"],
                    ["Order date", "May 8, 2026"],
                    ["Order price", "$4,800"],
                    ["Deadline", "May 22, 2026"],
                  ].map(([label, value]) => (
                    <div
                      className="flex items-center justify-between gap-4 border-b pb-3 text-sm last:border-b-0 last:pb-0"
                      key={label}
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-right font-medium">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-4 xl:grid-cols-[1fr_360px]">
              <Card id="materials">
                <CardHeader>
                  <CardTitle>Materials by Order</CardTitle>
                  <CardDescription>
                    Used and planned quantities for selected client orders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto rounded-md border">
                    <div className="min-w-[680px]">
                      <div className="grid grid-cols-[120px_1fr_90px_120px_140px] gap-4 border-b bg-muted/50 px-4 py-3 text-xs font-medium text-muted-foreground">
                        <span>Order no.</span>
                        <span>Material</span>
                        <span>Price</span>
                        <span>Used qty</span>
                        <span>Planned qty</span>
                      </div>
                      {materials.map((material) => (
                        <div
                          className="grid grid-cols-[120px_1fr_90px_120px_140px] gap-4 border-b px-4 py-4 text-sm last:border-b-0"
                          key={`${material.order}-${material.material}`}
                        >
                          <span className="font-medium">{material.order}</span>
                          <span>{material.material}</span>
                          <span>{material.price}</span>
                          <span className="text-muted-foreground">
                            {material.used}
                          </span>
                          <span className="text-muted-foreground">
                            {material.planned}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card id="costs">
                <CardHeader>
                  <CardTitle>Cost Summary</CardTitle>
                  <CardDescription>
                    Order prices and material totals for reports.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    ["Order prices", "$10,350"],
                    ["Material costs", "$3,920"],
                    ["Total material costs", "$18,400"],
                    ["Projected margin", "$6,430"],
                  ].map(([label, value]) => (
                    <div
                      className="flex items-center justify-between rounded-md bg-muted px-3 py-3 text-sm"
                      key={label}
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {reportLinks.map((report) => (
                <Card id={report.toLowerCase().replaceAll(" ", "-")} key={report}>
                  <CardHeader>
                    <CardTitle className="text-base">{report}</CardTitle>
                    <CardDescription>
                      Ready section for filters, tables, and exports.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      Open
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
