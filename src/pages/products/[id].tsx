import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

export default function Products({ id }) {
  return (
    <div>Products {id}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.params.id)

  return {
    props: {
      id: ctx.params.id
    }
  }
}
