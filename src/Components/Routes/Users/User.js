import React from 'react'

const User = () => {
  return (
    <div>
        <h3 className='text-center m-4'><strong>Users</strong></h3>

        <table class="table m-5">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Full-Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default User