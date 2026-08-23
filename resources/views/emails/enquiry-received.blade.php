<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Dharakala</title>
  <style>
    body { font-family: Georgia, serif; background: #F5F2EA; color: #17231F; margin: 0; padding: 40px 20px; }
    .card { background: #fff; max-width: 560px; margin: 0 auto; border: 1px solid #D8DED9; padding: 40px; }
    .logo { font-size: 1.25rem; letter-spacing: -0.01em; margin-bottom: 32px; color: #044336; }
    h2 { font-size: 1.5rem; font-weight: 400; margin: 0 0 24px; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 10px 0; border-bottom: 1px solid #D8DED9; vertical-align: top; }
    td:first-child { width: 130px; font-family: 'Inter', sans-serif; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: #66716C; padding-right: 16px; }
    .message-block { margin-top: 24px; padding: 20px; background: #E8F0ED; border-left: 3px solid #044336; }
    .footer { text-align: center; color: #66716C; font-family: sans-serif; font-size: 0.75rem; margin-top: 32px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">Dharakala</div>
    <h2>New Enquiry Received</h2>
    <table>
      <tr>
        <td>Name</td>
        <td>{{ $enquiry->name }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td><a href="mailto:{{ $enquiry->email }}" style="color:#044336;">{{ $enquiry->email }}</a></td>
      </tr>
      @if($enquiry->phone)
      <tr>
        <td>Phone</td>
        <td>{{ $enquiry->phone }}</td>
      </tr>
      @endif
      <tr>
        <td>Interest</td>
        <td>{{ $enquiry->interest }}</td>
      </tr>
      <tr>
        <td>Received</td>
        <td>{{ $enquiry->created_at->format('d M Y, H:i') }}</td>
      </tr>
    </table>

    @if($enquiry->message)
    <div class="message-block">
      <p style="margin:0 0 6px; font-family:sans-serif; font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; color:#66716C;">Message</p>
      <p style="margin:0; line-height:1.6;">{{ $enquiry->message }}</p>
    </div>
    @endif
  </div>
  <p class="footer">Dharakala · hello@studiovastu.in · Hazratganj, Lucknow</p>
</body>
</html>
