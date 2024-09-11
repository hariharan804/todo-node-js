// import { Knex } from "knex";

// class Tags {
//   static async create(Tenant: Knex, options: any): Promise<Tags> {
//     try {
//       const { name, organizationId, clientId, nameArabic } = options;

//       const createQuery = await InquiryTags.query(Tenant)
//         .insert({
//           name,
//           organization_id: organizationId,
//           client_id: clientId,
//           name_arabic: nameArabic,
//         })
//         .returning("*");

//       return createQuery?.id;
//     } catch (error: any) {
//       Logger.error(error.message, error);
//       throw new Error(error.message);
//     }
//   }

//   static async findAll(
//     Tenant: Knex,
//     options: inquiryTagTypes.GetServiceOptions
//   ): Promise<{ tagResult: InquiryTags[]; totalCount: number }> {
//     try {
//       const { limit, offset, search, clientId, organizationId } = options;

//       let baseQuery = InquiryTags.query(Tenant)
//         .select("id", "name", "name_arabic")
//         .where({
//           is_active: true,
//           is_deleted: false,
//           client_id: clientId,
//         })
//         .where((builder) => {
//           if (organizationId) {
//             builder.where("organization_id", organizationId);
//           }
//           if (clientId) {
//             builder.where("client_id", clientId);
//           }
//           if (search) {
//             builder.where("name", "ilike", `%${search}%`);
//             builder.orWhere("name_arabic", "ilike", `%${search}%`);
//           }
//         });

//       const [tagResult, totalCount] = await Promise.all([
//         baseQuery.offset(offset).limit(limit),
//         baseQuery.resultSize(),
//       ]);

//       return { tagResult, totalCount };
//     } catch (error: any) {
//       Logger.error(error.message, error);
//       throw new Error(error.message);
//     }
//   }
// }

// export { Tags };
