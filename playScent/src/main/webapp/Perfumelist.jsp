<%@page import="com.playscent.model.PerfumeDTO"%>
<%@page import="java.util.List"%>
<%@page import="com.playscent.model.PerfumeDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<title>Perfume List</title>
<style>
img {
  width: 300px;
  height: 150px;
  object-fit: cover;
}
body {
  padding:1.5em;
  background: #f5f5f5
}

table {
  border: 1px #a39485 solid;
  font-size: .9em;
  box-shadow: 0 2px 5px rgba(0,0,0,.25);
  width: 80%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
}

th {
  text-align: left;
}
  
thead {
  font-weight: bold;
  color: #fff;
  background: #73685d;
}
  
 td, th {
  padding: 1em .5em;
  vertical-align: middle;
}
  
 td {
  border-bottom: 1px solid rgba(0,0,0,.1);
  background: #fff;
}

a {
  color: #73685d;
}




  
 @media all and (max-width: 768px) {
    
  table, thead, tbody, th, td, tr {
    display: block;
  }
  
  th {
    text-align: right;
  }
  
  table {
    position: relative; 
    padding-bottom: 0;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
  }
  
  thead {
    float: left;
    white-space: nowrap;
  }
  
  tbody {
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    white-space: nowrap;
  }
  
  tr {
    display: inline-block;
    vertical-align: top;
  }
  
  th {
    border-bottom: 1px solid #a39485;
  }
  
  td {
    border-bottom: 1px solid #e5e5e5;
  }
  
  

  
  
  }

</style>
</head>
<body>
<%
							
						List<PerfumeDTO> perfumes = new PerfumeDAO().allPerfumes();
						
							
							%>



<table class="review-table">
    <thead>
    <tr>
        <th>향수향수</th>
        <th>향수브랜드</th>
        <th>향수가격</th>
        <th>향수향기</th>
        <th colspan='2'>이미지</th>

    </tr>
    </thead>
    <tbody>
   <%for(PerfumeDTO per: perfumes){ %>
							<tr>
							
							<td><%=per.getPF_NAME()%></td>
								<td><%=per.getPF_BRAND()%></td>
								<td><%=per.getPF_PRICE() %></td>
								<td><%=per.getPF_Accords() %></td>	
								<td><img src=<%=per.getPF_Image()%>></td>					
							</tr>
							<%} %>
							
						
    </tbody>
</table>







</body>
</html>