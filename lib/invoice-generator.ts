export interface InvoiceData {
  orderNumber: string
  orderDate: string
  customerName: string
  customerAddress: string
  customerCity: string
  customerState: string
  customerPincode: string
  customerPhone: string
  items: {
    name: string
    quantity: number
    size: string
    color: string
    price: number
    total: number
  }[]
  subtotal: number
  shippingCost: number
  tax: number
  total: number
  paymentMethod: string
  status: string
}

export class InvoiceGenerator {
  static async generateAndDownload(data: InvoiceData): Promise<void> {
    // Create a simple HTML invoice
    const html = this.generateHTML(data)
    
    // Create blob and download
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `invoice-${data.orderNumber}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    URL.revokeObjectURL(url)
  }

  private static generateHTML(data: InvoiceData): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice - ${data.orderNumber}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .invoice {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            border-bottom: 2px solid #8B0000;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .header h1 {
            color: #8B0000;
            margin: 0;
            font-size: 2.5em;
        }
        .header p {
            color: #666;
            margin: 5px 0;
        }
        .invoice-details {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
        }
        .customer-info, .order-info {
            flex: 1;
        }
        .customer-info h3, .order-info h3 {
            color: #8B0000;
            margin-bottom: 10px;
        }
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 30px;
        }
        .items-table th, .items-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        .items-table th {
            background-color: #8B0000;
            color: white;
        }
        .items-table tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .totals {
            text-align: right;
            margin-top: 20px;
        }
        .totals table {
            margin-left: auto;
            width: 300px;
        }
        .totals td {
            padding: 8px;
            border-bottom: 1px solid #ddd;
        }
        .total-row {
            font-weight: bold;
            font-size: 1.2em;
            color: #8B0000;
        }
        .footer {
            margin-top: 40px;
            text-align: center;
            color: #666;
            font-size: 0.9em;
        }
        @media print {
            body { background: white; }
            .invoice { box-shadow: none; }
        }
    </style>
</head>
<body>
    <div class="invoice">
        <div class="header">
            <h1>॥ श्री ॥ Culture Hatti</h1>
            <p>Traditional Indian Bazaar</p>
            <p>Invoice</p>
        </div>

        <div class="invoice-details">
            <div class="customer-info">
                <h3>Bill To:</h3>
                <p><strong>${data.customerName}</strong></p>
                <p>${data.customerAddress}</p>
                <p>${data.customerCity}, ${data.customerState} - ${data.customerPincode}</p>
                <p>Phone: ${data.customerPhone}</p>
            </div>
            <div class="order-info">
                <h3>Order Details:</h3>
                <p><strong>Order Number:</strong> ${data.orderNumber}</p>
                <p><strong>Order Date:</strong> ${new Date(data.orderDate).toLocaleDateString()}</p>
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Payment Method:</strong> ${data.paymentMethod.toUpperCase()}</p>
            </div>
        </div>

        <table class="items-table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${data.items.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.size}</td>
                        <td>${item.color}</td>
                        <td>${item.quantity}</td>
                        <td>₹${item.price.toLocaleString()}</td>
                        <td>₹${item.total.toLocaleString()}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

        <div class="totals">
            <table>
                <tr>
                    <td>Subtotal:</td>
                    <td>₹${data.subtotal.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Shipping:</td>
                    <td>₹${data.shippingCost.toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Tax:</td>
                    <td>₹${data.tax.toLocaleString()}</td>
                </tr>
                <tr class="total-row">
                    <td>Total:</td>
                    <td>₹${data.total.toLocaleString()}</td>
                </tr>
            </table>
        </div>

        <div class="footer">
            <p>Thank you for shopping with Culture Hatti!</p>
            <p>For any queries, contact us at: +91 98765 43210</p>
            <p>Email: support@culture-hatti.com</p>
        </div>
    </div>
</body>
</html>
    `
  }
}
