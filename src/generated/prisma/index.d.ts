
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Coursework
 * 
 */
export type Coursework = $Result.DefaultSelection<Prisma.$CourseworkPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model CourseResource
 * 
 */
export type CourseResource = $Result.DefaultSelection<Prisma.$CourseResourcePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursework`: Exposes CRUD operations for the **Coursework** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courseworks
    * const courseworks = await prisma.coursework.findMany()
    * ```
    */
  get coursework(): Prisma.CourseworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseResource`: Exposes CRUD operations for the **CourseResource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseResources
    * const courseResources = await prisma.courseResource.findMany()
    * ```
    */
  get courseResource(): Prisma.CourseResourceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Enrollment: 'Enrollment',
    Coursework: 'Coursework',
    Submission: 'Submission',
    CourseResource: 'CourseResource'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "enrollment" | "coursework" | "submission" | "courseResource"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Coursework: {
        payload: Prisma.$CourseworkPayload<ExtArgs>
        fields: Prisma.CourseworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          findFirst: {
            args: Prisma.CourseworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          findMany: {
            args: Prisma.CourseworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>[]
          }
          create: {
            args: Prisma.CourseworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          createMany: {
            args: Prisma.CourseworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>[]
          }
          delete: {
            args: Prisma.CourseworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          update: {
            args: Prisma.CourseworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          deleteMany: {
            args: Prisma.CourseworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>[]
          }
          upsert: {
            args: Prisma.CourseworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseworkPayload>
          }
          aggregate: {
            args: Prisma.CourseworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursework>
          }
          groupBy: {
            args: Prisma.CourseworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseworkCountArgs<ExtArgs>
            result: $Utils.Optional<CourseworkCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      CourseResource: {
        payload: Prisma.$CourseResourcePayload<ExtArgs>
        fields: Prisma.CourseResourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseResourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseResourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>
          }
          findFirst: {
            args: Prisma.CourseResourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseResourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>
          }
          findMany: {
            args: Prisma.CourseResourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>[]
          }
          create: {
            args: Prisma.CourseResourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>
          }
          createMany: {
            args: Prisma.CourseResourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseResourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>[]
          }
          delete: {
            args: Prisma.CourseResourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>
          }
          update: {
            args: Prisma.CourseResourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>
          }
          deleteMany: {
            args: Prisma.CourseResourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseResourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseResourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>[]
          }
          upsert: {
            args: Prisma.CourseResourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseResourcePayload>
          }
          aggregate: {
            args: Prisma.CourseResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseResource>
          }
          groupBy: {
            args: Prisma.CourseResourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseResourceCountArgs<ExtArgs>
            result: $Utils.Optional<CourseResourceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    enrollment?: EnrollmentOmit
    coursework?: CourseworkOmit
    submission?: SubmissionOmit
    courseResource?: CourseResourceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    teacherCourses: number
    enrollments: number
    submissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherCourses?: boolean | UserCountOutputTypeCountTeacherCoursesArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    enrollments: number
    coursework: number
    resources: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
    coursework?: boolean | CourseCountOutputTypeCountCourseworkArgs
    resources?: boolean | CourseCountOutputTypeCountResourcesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseworkWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountResourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseResourceWhereInput
  }


  /**
   * Count Type CourseworkCountOutputType
   */

  export type CourseworkCountOutputType = {
    submissions: number
  }

  export type CourseworkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | CourseworkCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * CourseworkCountOutputType without action
   */
  export type CourseworkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseworkCountOutputType
     */
    select?: CourseworkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseworkCountOutputType without action
   */
  export type CourseworkCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    full_name: string | null
    role: string | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    full_name: string | null
    role: string | null
    avatar_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    full_name: number
    role: number
    avatar_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    full_name?: true
    role?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    full_name?: true
    role?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    full_name?: true
    role?: true
    avatar_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    full_name: string
    role: string
    avatar_url: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    full_name?: boolean
    role?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherCourses?: boolean | User$teacherCoursesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    full_name?: boolean
    role?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    full_name?: boolean
    role?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    full_name?: boolean
    role?: boolean
    avatar_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "full_name" | "role" | "avatar_url" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherCourses?: boolean | User$teacherCoursesArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teacherCourses: Prisma.$CoursePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      full_name: string
      role: string
      avatar_url: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherCourses<T extends User$teacherCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teacherCourses
   */
  export type User$teacherCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    teacherId: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    teacherId: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    teacherId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    teacherId: string
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    coursework?: boolean | Course$courseworkArgs<ExtArgs>
    resources?: boolean | Course$resourcesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacherId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "createdAt" | "updatedAt" | "teacherId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    coursework?: boolean | Course$courseworkArgs<ExtArgs>
    resources?: boolean | Course$resourcesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      coursework: Prisma.$CourseworkPayload<ExtArgs>[]
      resources: Prisma.$CourseResourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      teacherId: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coursework<T extends Course$courseworkArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseworkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resources<T extends Course$resourcesArgs<ExtArgs> = {}>(args?: Subset<T, Course$resourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly imageUrl: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
    readonly teacherId: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.coursework
   */
  export type Course$courseworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    where?: CourseworkWhereInput
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    cursor?: CourseworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Course.resources
   */
  export type Course$resourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    where?: CourseResourceWhereInput
    orderBy?: CourseResourceOrderByWithRelationInput | CourseResourceOrderByWithRelationInput[]
    cursor?: CourseResourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    studentId: string | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
    studentId: string | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    courseId: number
    studentId: number
    _all: number
  }


  export type EnrollmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    studentId?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    studentId?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    studentId?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    courseId: string
    studentId: string
    _count: EnrollmentCountAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    studentId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    studentId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    studentId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    studentId?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "courseId" | "studentId", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      courseId: string
      studentId: string
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
    readonly courseId: FieldRef<"Enrollment", 'String'>
    readonly studentId: FieldRef<"Enrollment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Coursework
   */

  export type AggregateCoursework = {
    _count: CourseworkCountAggregateOutputType | null
    _min: CourseworkMinAggregateOutputType | null
    _max: CourseworkMaxAggregateOutputType | null
  }

  export type CourseworkMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
  }

  export type CourseworkMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
  }

  export type CourseworkCountAggregateOutputType = {
    id: number
    title: number
    description: number
    dueDate: number
    createdAt: number
    updatedAt: number
    courseId: number
    _all: number
  }


  export type CourseworkMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type CourseworkMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type CourseworkCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    _all?: true
  }

  export type CourseworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coursework to aggregate.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courseworks
    **/
    _count?: true | CourseworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseworkMaxAggregateInputType
  }

  export type GetCourseworkAggregateType<T extends CourseworkAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursework]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursework[P]>
      : GetScalarType<T[P], AggregateCoursework[P]>
  }




  export type CourseworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseworkWhereInput
    orderBy?: CourseworkOrderByWithAggregationInput | CourseworkOrderByWithAggregationInput[]
    by: CourseworkScalarFieldEnum[] | CourseworkScalarFieldEnum
    having?: CourseworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseworkCountAggregateInputType | true
    _min?: CourseworkMinAggregateInputType
    _max?: CourseworkMaxAggregateInputType
  }

  export type CourseworkGroupByOutputType = {
    id: string
    title: string
    description: string | null
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    courseId: string
    _count: CourseworkCountAggregateOutputType | null
    _min: CourseworkMinAggregateOutputType | null
    _max: CourseworkMaxAggregateOutputType | null
  }

  type GetCourseworkGroupByPayload<T extends CourseworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseworkGroupByOutputType[P]>
            : GetScalarType<T[P], CourseworkGroupByOutputType[P]>
        }
      >
    >


  export type CourseworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Coursework$submissionsArgs<ExtArgs>
    _count?: boolean | CourseworkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursework"]>

  export type CourseworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursework"]>

  export type CourseworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursework"]>

  export type CourseworkSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
  }

  export type CourseworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "dueDate" | "createdAt" | "updatedAt" | "courseId", ExtArgs["result"]["coursework"]>
  export type CourseworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    submissions?: boolean | Coursework$submissionsArgs<ExtArgs>
    _count?: boolean | CourseworkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseworkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coursework"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
      courseId: string
    }, ExtArgs["result"]["coursework"]>
    composites: {}
  }

  type CourseworkGetPayload<S extends boolean | null | undefined | CourseworkDefaultArgs> = $Result.GetResult<Prisma.$CourseworkPayload, S>

  type CourseworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseworkCountAggregateInputType | true
    }

  export interface CourseworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coursework'], meta: { name: 'Coursework' } }
    /**
     * Find zero or one Coursework that matches the filter.
     * @param {CourseworkFindUniqueArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseworkFindUniqueArgs>(args: SelectSubset<T, CourseworkFindUniqueArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coursework that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseworkFindUniqueOrThrowArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseworkFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coursework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkFindFirstArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseworkFindFirstArgs>(args?: SelectSubset<T, CourseworkFindFirstArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coursework that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkFindFirstOrThrowArgs} args - Arguments to find a Coursework
     * @example
     * // Get one Coursework
     * const coursework = await prisma.coursework.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseworkFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courseworks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courseworks
     * const courseworks = await prisma.coursework.findMany()
     * 
     * // Get first 10 Courseworks
     * const courseworks = await prisma.coursework.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseworkWithIdOnly = await prisma.coursework.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseworkFindManyArgs>(args?: SelectSubset<T, CourseworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coursework.
     * @param {CourseworkCreateArgs} args - Arguments to create a Coursework.
     * @example
     * // Create one Coursework
     * const Coursework = await prisma.coursework.create({
     *   data: {
     *     // ... data to create a Coursework
     *   }
     * })
     * 
     */
    create<T extends CourseworkCreateArgs>(args: SelectSubset<T, CourseworkCreateArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courseworks.
     * @param {CourseworkCreateManyArgs} args - Arguments to create many Courseworks.
     * @example
     * // Create many Courseworks
     * const coursework = await prisma.coursework.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseworkCreateManyArgs>(args?: SelectSubset<T, CourseworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courseworks and returns the data saved in the database.
     * @param {CourseworkCreateManyAndReturnArgs} args - Arguments to create many Courseworks.
     * @example
     * // Create many Courseworks
     * const coursework = await prisma.coursework.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courseworks and only return the `id`
     * const courseworkWithIdOnly = await prisma.coursework.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseworkCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coursework.
     * @param {CourseworkDeleteArgs} args - Arguments to delete one Coursework.
     * @example
     * // Delete one Coursework
     * const Coursework = await prisma.coursework.delete({
     *   where: {
     *     // ... filter to delete one Coursework
     *   }
     * })
     * 
     */
    delete<T extends CourseworkDeleteArgs>(args: SelectSubset<T, CourseworkDeleteArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coursework.
     * @param {CourseworkUpdateArgs} args - Arguments to update one Coursework.
     * @example
     * // Update one Coursework
     * const coursework = await prisma.coursework.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseworkUpdateArgs>(args: SelectSubset<T, CourseworkUpdateArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courseworks.
     * @param {CourseworkDeleteManyArgs} args - Arguments to filter Courseworks to delete.
     * @example
     * // Delete a few Courseworks
     * const { count } = await prisma.coursework.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseworkDeleteManyArgs>(args?: SelectSubset<T, CourseworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courseworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courseworks
     * const coursework = await prisma.coursework.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseworkUpdateManyArgs>(args: SelectSubset<T, CourseworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courseworks and returns the data updated in the database.
     * @param {CourseworkUpdateManyAndReturnArgs} args - Arguments to update many Courseworks.
     * @example
     * // Update many Courseworks
     * const coursework = await prisma.coursework.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courseworks and only return the `id`
     * const courseworkWithIdOnly = await prisma.coursework.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseworkUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coursework.
     * @param {CourseworkUpsertArgs} args - Arguments to update or create a Coursework.
     * @example
     * // Update or create a Coursework
     * const coursework = await prisma.coursework.upsert({
     *   create: {
     *     // ... data to create a Coursework
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coursework we want to update
     *   }
     * })
     */
    upsert<T extends CourseworkUpsertArgs>(args: SelectSubset<T, CourseworkUpsertArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courseworks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkCountArgs} args - Arguments to filter Courseworks to count.
     * @example
     * // Count the number of Courseworks
     * const count = await prisma.coursework.count({
     *   where: {
     *     // ... the filter for the Courseworks we want to count
     *   }
     * })
    **/
    count<T extends CourseworkCountArgs>(
      args?: Subset<T, CourseworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coursework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseworkAggregateArgs>(args: Subset<T, CourseworkAggregateArgs>): Prisma.PrismaPromise<GetCourseworkAggregateType<T>>

    /**
     * Group by Coursework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseworkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseworkGroupByArgs['orderBy'] }
        : { orderBy?: CourseworkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coursework model
   */
  readonly fields: CourseworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coursework.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Coursework$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Coursework$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coursework model
   */
  interface CourseworkFieldRefs {
    readonly id: FieldRef<"Coursework", 'String'>
    readonly title: FieldRef<"Coursework", 'String'>
    readonly description: FieldRef<"Coursework", 'String'>
    readonly dueDate: FieldRef<"Coursework", 'DateTime'>
    readonly createdAt: FieldRef<"Coursework", 'DateTime'>
    readonly updatedAt: FieldRef<"Coursework", 'DateTime'>
    readonly courseId: FieldRef<"Coursework", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Coursework findUnique
   */
  export type CourseworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework findUniqueOrThrow
   */
  export type CourseworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework findFirst
   */
  export type CourseworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courseworks.
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courseworks.
     */
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Coursework findFirstOrThrow
   */
  export type CourseworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Coursework to fetch.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courseworks.
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courseworks.
     */
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Coursework findMany
   */
  export type CourseworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter, which Courseworks to fetch.
     */
    where?: CourseworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courseworks to fetch.
     */
    orderBy?: CourseworkOrderByWithRelationInput | CourseworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courseworks.
     */
    cursor?: CourseworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courseworks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courseworks.
     */
    skip?: number
    distinct?: CourseworkScalarFieldEnum | CourseworkScalarFieldEnum[]
  }

  /**
   * Coursework create
   */
  export type CourseworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * The data needed to create a Coursework.
     */
    data: XOR<CourseworkCreateInput, CourseworkUncheckedCreateInput>
  }

  /**
   * Coursework createMany
   */
  export type CourseworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courseworks.
     */
    data: CourseworkCreateManyInput | CourseworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coursework createManyAndReturn
   */
  export type CourseworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * The data used to create many Courseworks.
     */
    data: CourseworkCreateManyInput | CourseworkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coursework update
   */
  export type CourseworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * The data needed to update a Coursework.
     */
    data: XOR<CourseworkUpdateInput, CourseworkUncheckedUpdateInput>
    /**
     * Choose, which Coursework to update.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework updateMany
   */
  export type CourseworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courseworks.
     */
    data: XOR<CourseworkUpdateManyMutationInput, CourseworkUncheckedUpdateManyInput>
    /**
     * Filter which Courseworks to update
     */
    where?: CourseworkWhereInput
    /**
     * Limit how many Courseworks to update.
     */
    limit?: number
  }

  /**
   * Coursework updateManyAndReturn
   */
  export type CourseworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * The data used to update Courseworks.
     */
    data: XOR<CourseworkUpdateManyMutationInput, CourseworkUncheckedUpdateManyInput>
    /**
     * Filter which Courseworks to update
     */
    where?: CourseworkWhereInput
    /**
     * Limit how many Courseworks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coursework upsert
   */
  export type CourseworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * The filter to search for the Coursework to update in case it exists.
     */
    where: CourseworkWhereUniqueInput
    /**
     * In case the Coursework found by the `where` argument doesn't exist, create a new Coursework with this data.
     */
    create: XOR<CourseworkCreateInput, CourseworkUncheckedCreateInput>
    /**
     * In case the Coursework was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseworkUpdateInput, CourseworkUncheckedUpdateInput>
  }

  /**
   * Coursework delete
   */
  export type CourseworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
    /**
     * Filter which Coursework to delete.
     */
    where: CourseworkWhereUniqueInput
  }

  /**
   * Coursework deleteMany
   */
  export type CourseworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courseworks to delete
     */
    where?: CourseworkWhereInput
    /**
     * Limit how many Courseworks to delete.
     */
    limit?: number
  }

  /**
   * Coursework.submissions
   */
  export type Coursework$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Coursework without action
   */
  export type CourseworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coursework
     */
    select?: CourseworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coursework
     */
    omit?: CourseworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseworkInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    grade: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    grade: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    content: string | null
    fileUrl: string | null
    grade: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseworkId: string | null
    studentId: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    content: string | null
    fileUrl: string | null
    grade: number | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
    courseworkId: string | null
    studentId: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    content: number
    fileUrl: number
    grade: number
    feedback: number
    createdAt: number
    updatedAt: number
    courseworkId: number
    studentId: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    grade?: true
  }

  export type SubmissionSumAggregateInputType = {
    grade?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    grade?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    courseworkId?: true
    studentId?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    grade?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    courseworkId?: true
    studentId?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    content?: true
    fileUrl?: true
    grade?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    courseworkId?: true
    studentId?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    content: string
    fileUrl: string | null
    grade: number | null
    feedback: string | null
    createdAt: Date
    updatedAt: Date
    courseworkId: string
    studentId: string
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    grade?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseworkId?: boolean
    studentId?: boolean
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    grade?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseworkId?: boolean
    studentId?: boolean
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    grade?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseworkId?: boolean
    studentId?: boolean
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    content?: boolean
    fileUrl?: boolean
    grade?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseworkId?: boolean
    studentId?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "fileUrl" | "grade" | "feedback" | "createdAt" | "updatedAt" | "courseworkId" | "studentId", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coursework?: boolean | CourseworkDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      coursework: Prisma.$CourseworkPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      fileUrl: string | null
      grade: number | null
      feedback: string | null
      createdAt: Date
      updatedAt: Date
      courseworkId: string
      studentId: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coursework<T extends CourseworkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseworkDefaultArgs<ExtArgs>>): Prisma__CourseworkClient<$Result.GetResult<Prisma.$CourseworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly content: FieldRef<"Submission", 'String'>
    readonly fileUrl: FieldRef<"Submission", 'String'>
    readonly grade: FieldRef<"Submission", 'Int'>
    readonly feedback: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
    readonly courseworkId: FieldRef<"Submission", 'String'>
    readonly studentId: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model CourseResource
   */

  export type AggregateCourseResource = {
    _count: CourseResourceCountAggregateOutputType | null
    _avg: CourseResourceAvgAggregateOutputType | null
    _sum: CourseResourceSumAggregateOutputType | null
    _min: CourseResourceMinAggregateOutputType | null
    _max: CourseResourceMaxAggregateOutputType | null
  }

  export type CourseResourceAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type CourseResourceSumAggregateOutputType = {
    fileSize: number | null
  }

  export type CourseResourceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
  }

  export type CourseResourceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    fileUrl: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
    courseId: string | null
  }

  export type CourseResourceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    fileUrl: number
    fileType: number
    fileSize: number
    createdAt: number
    updatedAt: number
    courseId: number
    _all: number
  }


  export type CourseResourceAvgAggregateInputType = {
    fileSize?: true
  }

  export type CourseResourceSumAggregateInputType = {
    fileSize?: true
  }

  export type CourseResourceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type CourseResourceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
  }

  export type CourseResourceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    fileUrl?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    courseId?: true
    _all?: true
  }

  export type CourseResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseResource to aggregate.
     */
    where?: CourseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResources to fetch.
     */
    orderBy?: CourseResourceOrderByWithRelationInput | CourseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseResources
    **/
    _count?: true | CourseResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseResourceMaxAggregateInputType
  }

  export type GetCourseResourceAggregateType<T extends CourseResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseResource[P]>
      : GetScalarType<T[P], AggregateCourseResource[P]>
  }




  export type CourseResourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseResourceWhereInput
    orderBy?: CourseResourceOrderByWithAggregationInput | CourseResourceOrderByWithAggregationInput[]
    by: CourseResourceScalarFieldEnum[] | CourseResourceScalarFieldEnum
    having?: CourseResourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseResourceCountAggregateInputType | true
    _avg?: CourseResourceAvgAggregateInputType
    _sum?: CourseResourceSumAggregateInputType
    _min?: CourseResourceMinAggregateInputType
    _max?: CourseResourceMaxAggregateInputType
  }

  export type CourseResourceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt: Date
    updatedAt: Date
    courseId: string
    _count: CourseResourceCountAggregateOutputType | null
    _avg: CourseResourceAvgAggregateOutputType | null
    _sum: CourseResourceSumAggregateOutputType | null
    _min: CourseResourceMinAggregateOutputType | null
    _max: CourseResourceMaxAggregateOutputType | null
  }

  type GetCourseResourceGroupByPayload<T extends CourseResourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseResourceGroupByOutputType[P]>
            : GetScalarType<T[P], CourseResourceGroupByOutputType[P]>
        }
      >
    >


  export type CourseResourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResource"]>

  export type CourseResourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResource"]>

  export type CourseResourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseResource"]>

  export type CourseResourceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    fileUrl?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courseId?: boolean
  }

  export type CourseResourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "fileUrl" | "fileType" | "fileSize" | "createdAt" | "updatedAt" | "courseId", ExtArgs["result"]["courseResource"]>
  export type CourseResourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseResourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseResourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseResourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseResource"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      fileUrl: string
      fileType: string
      fileSize: number
      createdAt: Date
      updatedAt: Date
      courseId: string
    }, ExtArgs["result"]["courseResource"]>
    composites: {}
  }

  type CourseResourceGetPayload<S extends boolean | null | undefined | CourseResourceDefaultArgs> = $Result.GetResult<Prisma.$CourseResourcePayload, S>

  type CourseResourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseResourceCountAggregateInputType | true
    }

  export interface CourseResourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseResource'], meta: { name: 'CourseResource' } }
    /**
     * Find zero or one CourseResource that matches the filter.
     * @param {CourseResourceFindUniqueArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseResourceFindUniqueArgs>(args: SelectSubset<T, CourseResourceFindUniqueArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseResource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseResourceFindUniqueOrThrowArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseResourceFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseResource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceFindFirstArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseResourceFindFirstArgs>(args?: SelectSubset<T, CourseResourceFindFirstArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseResource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceFindFirstOrThrowArgs} args - Arguments to find a CourseResource
     * @example
     * // Get one CourseResource
     * const courseResource = await prisma.courseResource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseResourceFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseResources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseResources
     * const courseResources = await prisma.courseResource.findMany()
     * 
     * // Get first 10 CourseResources
     * const courseResources = await prisma.courseResource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseResourceWithIdOnly = await prisma.courseResource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseResourceFindManyArgs>(args?: SelectSubset<T, CourseResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseResource.
     * @param {CourseResourceCreateArgs} args - Arguments to create a CourseResource.
     * @example
     * // Create one CourseResource
     * const CourseResource = await prisma.courseResource.create({
     *   data: {
     *     // ... data to create a CourseResource
     *   }
     * })
     * 
     */
    create<T extends CourseResourceCreateArgs>(args: SelectSubset<T, CourseResourceCreateArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseResources.
     * @param {CourseResourceCreateManyArgs} args - Arguments to create many CourseResources.
     * @example
     * // Create many CourseResources
     * const courseResource = await prisma.courseResource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseResourceCreateManyArgs>(args?: SelectSubset<T, CourseResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseResources and returns the data saved in the database.
     * @param {CourseResourceCreateManyAndReturnArgs} args - Arguments to create many CourseResources.
     * @example
     * // Create many CourseResources
     * const courseResource = await prisma.courseResource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseResources and only return the `id`
     * const courseResourceWithIdOnly = await prisma.courseResource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseResourceCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseResource.
     * @param {CourseResourceDeleteArgs} args - Arguments to delete one CourseResource.
     * @example
     * // Delete one CourseResource
     * const CourseResource = await prisma.courseResource.delete({
     *   where: {
     *     // ... filter to delete one CourseResource
     *   }
     * })
     * 
     */
    delete<T extends CourseResourceDeleteArgs>(args: SelectSubset<T, CourseResourceDeleteArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseResource.
     * @param {CourseResourceUpdateArgs} args - Arguments to update one CourseResource.
     * @example
     * // Update one CourseResource
     * const courseResource = await prisma.courseResource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseResourceUpdateArgs>(args: SelectSubset<T, CourseResourceUpdateArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseResources.
     * @param {CourseResourceDeleteManyArgs} args - Arguments to filter CourseResources to delete.
     * @example
     * // Delete a few CourseResources
     * const { count } = await prisma.courseResource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseResourceDeleteManyArgs>(args?: SelectSubset<T, CourseResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseResources
     * const courseResource = await prisma.courseResource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseResourceUpdateManyArgs>(args: SelectSubset<T, CourseResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseResources and returns the data updated in the database.
     * @param {CourseResourceUpdateManyAndReturnArgs} args - Arguments to update many CourseResources.
     * @example
     * // Update many CourseResources
     * const courseResource = await prisma.courseResource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseResources and only return the `id`
     * const courseResourceWithIdOnly = await prisma.courseResource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseResourceUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseResource.
     * @param {CourseResourceUpsertArgs} args - Arguments to update or create a CourseResource.
     * @example
     * // Update or create a CourseResource
     * const courseResource = await prisma.courseResource.upsert({
     *   create: {
     *     // ... data to create a CourseResource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseResource we want to update
     *   }
     * })
     */
    upsert<T extends CourseResourceUpsertArgs>(args: SelectSubset<T, CourseResourceUpsertArgs<ExtArgs>>): Prisma__CourseResourceClient<$Result.GetResult<Prisma.$CourseResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseResources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceCountArgs} args - Arguments to filter CourseResources to count.
     * @example
     * // Count the number of CourseResources
     * const count = await prisma.courseResource.count({
     *   where: {
     *     // ... the filter for the CourseResources we want to count
     *   }
     * })
    **/
    count<T extends CourseResourceCountArgs>(
      args?: Subset<T, CourseResourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseResourceAggregateArgs>(args: Subset<T, CourseResourceAggregateArgs>): Prisma.PrismaPromise<GetCourseResourceAggregateType<T>>

    /**
     * Group by CourseResource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseResourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseResourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseResourceGroupByArgs['orderBy'] }
        : { orderBy?: CourseResourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseResource model
   */
  readonly fields: CourseResourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseResource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseResourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseResource model
   */
  interface CourseResourceFieldRefs {
    readonly id: FieldRef<"CourseResource", 'String'>
    readonly name: FieldRef<"CourseResource", 'String'>
    readonly description: FieldRef<"CourseResource", 'String'>
    readonly fileUrl: FieldRef<"CourseResource", 'String'>
    readonly fileType: FieldRef<"CourseResource", 'String'>
    readonly fileSize: FieldRef<"CourseResource", 'Int'>
    readonly createdAt: FieldRef<"CourseResource", 'DateTime'>
    readonly updatedAt: FieldRef<"CourseResource", 'DateTime'>
    readonly courseId: FieldRef<"CourseResource", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseResource findUnique
   */
  export type CourseResourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * Filter, which CourseResource to fetch.
     */
    where: CourseResourceWhereUniqueInput
  }

  /**
   * CourseResource findUniqueOrThrow
   */
  export type CourseResourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * Filter, which CourseResource to fetch.
     */
    where: CourseResourceWhereUniqueInput
  }

  /**
   * CourseResource findFirst
   */
  export type CourseResourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * Filter, which CourseResource to fetch.
     */
    where?: CourseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResources to fetch.
     */
    orderBy?: CourseResourceOrderByWithRelationInput | CourseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseResources.
     */
    cursor?: CourseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseResources.
     */
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * CourseResource findFirstOrThrow
   */
  export type CourseResourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * Filter, which CourseResource to fetch.
     */
    where?: CourseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResources to fetch.
     */
    orderBy?: CourseResourceOrderByWithRelationInput | CourseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseResources.
     */
    cursor?: CourseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseResources.
     */
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * CourseResource findMany
   */
  export type CourseResourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * Filter, which CourseResources to fetch.
     */
    where?: CourseResourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseResources to fetch.
     */
    orderBy?: CourseResourceOrderByWithRelationInput | CourseResourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseResources.
     */
    cursor?: CourseResourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseResources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseResources.
     */
    skip?: number
    distinct?: CourseResourceScalarFieldEnum | CourseResourceScalarFieldEnum[]
  }

  /**
   * CourseResource create
   */
  export type CourseResourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseResource.
     */
    data: XOR<CourseResourceCreateInput, CourseResourceUncheckedCreateInput>
  }

  /**
   * CourseResource createMany
   */
  export type CourseResourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseResources.
     */
    data: CourseResourceCreateManyInput | CourseResourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseResource createManyAndReturn
   */
  export type CourseResourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * The data used to create many CourseResources.
     */
    data: CourseResourceCreateManyInput | CourseResourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseResource update
   */
  export type CourseResourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseResource.
     */
    data: XOR<CourseResourceUpdateInput, CourseResourceUncheckedUpdateInput>
    /**
     * Choose, which CourseResource to update.
     */
    where: CourseResourceWhereUniqueInput
  }

  /**
   * CourseResource updateMany
   */
  export type CourseResourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseResources.
     */
    data: XOR<CourseResourceUpdateManyMutationInput, CourseResourceUncheckedUpdateManyInput>
    /**
     * Filter which CourseResources to update
     */
    where?: CourseResourceWhereInput
    /**
     * Limit how many CourseResources to update.
     */
    limit?: number
  }

  /**
   * CourseResource updateManyAndReturn
   */
  export type CourseResourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * The data used to update CourseResources.
     */
    data: XOR<CourseResourceUpdateManyMutationInput, CourseResourceUncheckedUpdateManyInput>
    /**
     * Filter which CourseResources to update
     */
    where?: CourseResourceWhereInput
    /**
     * Limit how many CourseResources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseResource upsert
   */
  export type CourseResourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseResource to update in case it exists.
     */
    where: CourseResourceWhereUniqueInput
    /**
     * In case the CourseResource found by the `where` argument doesn't exist, create a new CourseResource with this data.
     */
    create: XOR<CourseResourceCreateInput, CourseResourceUncheckedCreateInput>
    /**
     * In case the CourseResource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseResourceUpdateInput, CourseResourceUncheckedUpdateInput>
  }

  /**
   * CourseResource delete
   */
  export type CourseResourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
    /**
     * Filter which CourseResource to delete.
     */
    where: CourseResourceWhereUniqueInput
  }

  /**
   * CourseResource deleteMany
   */
  export type CourseResourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseResources to delete
     */
    where?: CourseResourceWhereInput
    /**
     * Limit how many CourseResources to delete.
     */
    limit?: number
  }

  /**
   * CourseResource without action
   */
  export type CourseResourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseResource
     */
    select?: CourseResourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseResource
     */
    omit?: CourseResourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseResourceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    full_name: 'full_name',
    role: 'role',
    avatar_url: 'avatar_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    teacherId: 'teacherId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId',
    studentId: 'studentId'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const CourseworkScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId'
  };

  export type CourseworkScalarFieldEnum = (typeof CourseworkScalarFieldEnum)[keyof typeof CourseworkScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    content: 'content',
    fileUrl: 'fileUrl',
    grade: 'grade',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseworkId: 'courseworkId',
    studentId: 'studentId'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const CourseResourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    fileUrl: 'fileUrl',
    fileType: 'fileType',
    fileSize: 'fileSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    courseId: 'courseId'
  };

  export type CourseResourceScalarFieldEnum = (typeof CourseResourceScalarFieldEnum)[keyof typeof CourseResourceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    full_name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teacherCourses?: CourseListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherCourses?: CourseOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatar_url?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teacherCourses?: CourseListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    imageUrl?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    teacherId?: StringFilter<"Course"> | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrollments?: EnrollmentListRelationFilter
    coursework?: CourseworkListRelationFilter
    resources?: CourseResourceListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    teacher?: UserOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    coursework?: CourseworkOrderByRelationAggregateInput
    resources?: CourseResourceOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    imageUrl?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    teacherId?: StringFilter<"Course"> | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    enrollments?: EnrollmentListRelationFilter
    coursework?: CourseworkListRelationFilter
    resources?: CourseResourceListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    teacherId?: StringWithAggregatesFilter<"Course"> | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseId?: StringFilter<"Enrollment"> | string
    studentId?: StringFilter<"Enrollment"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    course?: CourseOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseId_studentId?: EnrollmentCourseIdStudentIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseId?: StringFilter<"Enrollment"> | string
    studentId?: StringFilter<"Enrollment"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "courseId_studentId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    courseId?: StringWithAggregatesFilter<"Enrollment"> | string
    studentId?: StringWithAggregatesFilter<"Enrollment"> | string
  }

  export type CourseworkWhereInput = {
    AND?: CourseworkWhereInput | CourseworkWhereInput[]
    OR?: CourseworkWhereInput[]
    NOT?: CourseworkWhereInput | CourseworkWhereInput[]
    id?: StringFilter<"Coursework"> | string
    title?: StringFilter<"Coursework"> | string
    description?: StringNullableFilter<"Coursework"> | string | null
    dueDate?: DateTimeNullableFilter<"Coursework"> | Date | string | null
    createdAt?: DateTimeFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeFilter<"Coursework"> | Date | string
    courseId?: StringFilter<"Coursework"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type CourseworkOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type CourseworkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseworkWhereInput | CourseworkWhereInput[]
    OR?: CourseworkWhereInput[]
    NOT?: CourseworkWhereInput | CourseworkWhereInput[]
    title?: StringFilter<"Coursework"> | string
    description?: StringNullableFilter<"Coursework"> | string | null
    dueDate?: DateTimeNullableFilter<"Coursework"> | Date | string | null
    createdAt?: DateTimeFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeFilter<"Coursework"> | Date | string
    courseId?: StringFilter<"Coursework"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type CourseworkOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    _count?: CourseworkCountOrderByAggregateInput
    _max?: CourseworkMaxOrderByAggregateInput
    _min?: CourseworkMinOrderByAggregateInput
  }

  export type CourseworkScalarWhereWithAggregatesInput = {
    AND?: CourseworkScalarWhereWithAggregatesInput | CourseworkScalarWhereWithAggregatesInput[]
    OR?: CourseworkScalarWhereWithAggregatesInput[]
    NOT?: CourseworkScalarWhereWithAggregatesInput | CourseworkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coursework"> | string
    title?: StringWithAggregatesFilter<"Coursework"> | string
    description?: StringNullableWithAggregatesFilter<"Coursework"> | string | null
    dueDate?: DateTimeNullableWithAggregatesFilter<"Coursework"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coursework"> | Date | string
    courseId?: StringWithAggregatesFilter<"Coursework"> | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    content?: StringFilter<"Submission"> | string
    fileUrl?: StringNullableFilter<"Submission"> | string | null
    grade?: IntNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    courseworkId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    coursework?: XOR<CourseworkScalarRelationFilter, CourseworkWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
    coursework?: CourseworkOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseworkId_studentId?: SubmissionCourseworkIdStudentIdCompoundUniqueInput
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    content?: StringFilter<"Submission"> | string
    fileUrl?: StringNullableFilter<"Submission"> | string | null
    grade?: IntNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    courseworkId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
    coursework?: XOR<CourseworkScalarRelationFilter, CourseworkWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "courseworkId_studentId">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    feedback?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    content?: StringWithAggregatesFilter<"Submission"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    grade?: IntNullableWithAggregatesFilter<"Submission"> | number | null
    feedback?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    courseworkId?: StringWithAggregatesFilter<"Submission"> | string
    studentId?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type CourseResourceWhereInput = {
    AND?: CourseResourceWhereInput | CourseResourceWhereInput[]
    OR?: CourseResourceWhereInput[]
    NOT?: CourseResourceWhereInput | CourseResourceWhereInput[]
    id?: StringFilter<"CourseResource"> | string
    name?: StringFilter<"CourseResource"> | string
    description?: StringNullableFilter<"CourseResource"> | string | null
    fileUrl?: StringFilter<"CourseResource"> | string
    fileType?: StringFilter<"CourseResource"> | string
    fileSize?: IntFilter<"CourseResource"> | number
    createdAt?: DateTimeFilter<"CourseResource"> | Date | string
    updatedAt?: DateTimeFilter<"CourseResource"> | Date | string
    courseId?: StringFilter<"CourseResource"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CourseResourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type CourseResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseResourceWhereInput | CourseResourceWhereInput[]
    OR?: CourseResourceWhereInput[]
    NOT?: CourseResourceWhereInput | CourseResourceWhereInput[]
    name?: StringFilter<"CourseResource"> | string
    description?: StringNullableFilter<"CourseResource"> | string | null
    fileUrl?: StringFilter<"CourseResource"> | string
    fileType?: StringFilter<"CourseResource"> | string
    fileSize?: IntFilter<"CourseResource"> | number
    createdAt?: DateTimeFilter<"CourseResource"> | Date | string
    updatedAt?: DateTimeFilter<"CourseResource"> | Date | string
    courseId?: StringFilter<"CourseResource"> | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type CourseResourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    _count?: CourseResourceCountOrderByAggregateInput
    _avg?: CourseResourceAvgOrderByAggregateInput
    _max?: CourseResourceMaxOrderByAggregateInput
    _min?: CourseResourceMinOrderByAggregateInput
    _sum?: CourseResourceSumOrderByAggregateInput
  }

  export type CourseResourceScalarWhereWithAggregatesInput = {
    AND?: CourseResourceScalarWhereWithAggregatesInput | CourseResourceScalarWhereWithAggregatesInput[]
    OR?: CourseResourceScalarWhereWithAggregatesInput[]
    NOT?: CourseResourceScalarWhereWithAggregatesInput | CourseResourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourseResource"> | string
    name?: StringWithAggregatesFilter<"CourseResource"> | string
    description?: StringNullableWithAggregatesFilter<"CourseResource"> | string | null
    fileUrl?: StringWithAggregatesFilter<"CourseResource"> | string
    fileType?: StringWithAggregatesFilter<"CourseResource"> | string
    fileSize?: IntWithAggregatesFilter<"CourseResource"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CourseResource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourseResource"> | Date | string
    courseId?: StringWithAggregatesFilter<"CourseResource"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherCourses?: CourseCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherCourses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherCourses?: CourseUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherCourses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    coursework?: CourseworkCreateNestedManyWithoutCourseInput
    resources?: CourseResourceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    coursework?: CourseworkUncheckedCreateNestedManyWithoutCourseInput
    resources?: CourseResourceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    coursework?: CourseworkUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    coursework?: CourseworkUncheckedUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
    student: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    studentId: string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
    student?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    studentId: string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseworkCreateInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseworkInput
    submissions?: SubmissionCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseworkNestedInput
    submissions?: SubmissionUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
    submissions?: SubmissionUncheckedUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type CourseworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coursework: CourseworkCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkId: string
    studentId: string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursework?: CourseworkUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkId: string
    studentId: string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseResourceCreateInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutResourcesInput
  }

  export type CourseResourceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type CourseResourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutResourcesNestedInput
  }

  export type CourseResourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseResourceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type CourseResourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseResourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    full_name?: SortOrder
    role?: SortOrder
    avatar_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseworkListRelationFilter = {
    every?: CourseworkWhereInput
    some?: CourseworkWhereInput
    none?: CourseworkWhereInput
  }

  export type CourseResourceListRelationFilter = {
    every?: CourseResourceWhereInput
    some?: CourseResourceWhereInput
    none?: CourseResourceWhereInput
  }

  export type CourseworkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseResourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacherId?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type EnrollmentCourseIdStudentIdCompoundUniqueInput = {
    courseId: string
    studentId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
    studentId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CourseworkCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type CourseworkMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type CourseworkMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CourseworkScalarRelationFilter = {
    is?: CourseworkWhereInput
    isNot?: CourseworkWhereInput
  }

  export type SubmissionCourseworkIdStudentIdCompoundUniqueInput = {
    courseworkId: string
    studentId: string
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    grade?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseworkId?: SortOrder
    studentId?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CourseResourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type CourseResourceAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type CourseResourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type CourseResourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courseId?: SortOrder
  }

  export type CourseResourceSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CourseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherCoursesInput = {
    create?: XOR<UserCreateWithoutTeacherCoursesInput, UserUncheckedCreateWithoutTeacherCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherCoursesInput
    connect?: UserWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CourseworkCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseworkCreateWithoutCourseInput, CourseworkUncheckedCreateWithoutCourseInput> | CourseworkCreateWithoutCourseInput[] | CourseworkUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutCourseInput | CourseworkCreateOrConnectWithoutCourseInput[]
    createMany?: CourseworkCreateManyCourseInputEnvelope
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
  }

  export type CourseResourceCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseResourceCreateWithoutCourseInput, CourseResourceUncheckedCreateWithoutCourseInput> | CourseResourceCreateWithoutCourseInput[] | CourseResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceCreateOrConnectWithoutCourseInput | CourseResourceCreateOrConnectWithoutCourseInput[]
    createMany?: CourseResourceCreateManyCourseInputEnvelope
    connect?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CourseworkUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseworkCreateWithoutCourseInput, CourseworkUncheckedCreateWithoutCourseInput> | CourseworkCreateWithoutCourseInput[] | CourseworkUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutCourseInput | CourseworkCreateOrConnectWithoutCourseInput[]
    createMany?: CourseworkCreateManyCourseInputEnvelope
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
  }

  export type CourseResourceUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseResourceCreateWithoutCourseInput, CourseResourceUncheckedCreateWithoutCourseInput> | CourseResourceCreateWithoutCourseInput[] | CourseResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceCreateOrConnectWithoutCourseInput | CourseResourceCreateOrConnectWithoutCourseInput[]
    createMany?: CourseResourceCreateManyCourseInputEnvelope
    connect?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeacherCoursesNestedInput = {
    create?: XOR<UserCreateWithoutTeacherCoursesInput, UserUncheckedCreateWithoutTeacherCoursesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherCoursesInput
    upsert?: UserUpsertWithoutTeacherCoursesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherCoursesInput, UserUpdateWithoutTeacherCoursesInput>, UserUncheckedUpdateWithoutTeacherCoursesInput>
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CourseworkUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseworkCreateWithoutCourseInput, CourseworkUncheckedCreateWithoutCourseInput> | CourseworkCreateWithoutCourseInput[] | CourseworkUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutCourseInput | CourseworkCreateOrConnectWithoutCourseInput[]
    upsert?: CourseworkUpsertWithWhereUniqueWithoutCourseInput | CourseworkUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseworkCreateManyCourseInputEnvelope
    set?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    disconnect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    delete?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    update?: CourseworkUpdateWithWhereUniqueWithoutCourseInput | CourseworkUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseworkUpdateManyWithWhereWithoutCourseInput | CourseworkUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
  }

  export type CourseResourceUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseResourceCreateWithoutCourseInput, CourseResourceUncheckedCreateWithoutCourseInput> | CourseResourceCreateWithoutCourseInput[] | CourseResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceCreateOrConnectWithoutCourseInput | CourseResourceCreateOrConnectWithoutCourseInput[]
    upsert?: CourseResourceUpsertWithWhereUniqueWithoutCourseInput | CourseResourceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseResourceCreateManyCourseInputEnvelope
    set?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    disconnect?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    delete?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    connect?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    update?: CourseResourceUpdateWithWhereUniqueWithoutCourseInput | CourseResourceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseResourceUpdateManyWithWhereWithoutCourseInput | CourseResourceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseResourceScalarWhereInput | CourseResourceScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CourseworkUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseworkCreateWithoutCourseInput, CourseworkUncheckedCreateWithoutCourseInput> | CourseworkCreateWithoutCourseInput[] | CourseworkUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseworkCreateOrConnectWithoutCourseInput | CourseworkCreateOrConnectWithoutCourseInput[]
    upsert?: CourseworkUpsertWithWhereUniqueWithoutCourseInput | CourseworkUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseworkCreateManyCourseInputEnvelope
    set?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    disconnect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    delete?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    connect?: CourseworkWhereUniqueInput | CourseworkWhereUniqueInput[]
    update?: CourseworkUpdateWithWhereUniqueWithoutCourseInput | CourseworkUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseworkUpdateManyWithWhereWithoutCourseInput | CourseworkUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
  }

  export type CourseResourceUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseResourceCreateWithoutCourseInput, CourseResourceUncheckedCreateWithoutCourseInput> | CourseResourceCreateWithoutCourseInput[] | CourseResourceUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseResourceCreateOrConnectWithoutCourseInput | CourseResourceCreateOrConnectWithoutCourseInput[]
    upsert?: CourseResourceUpsertWithWhereUniqueWithoutCourseInput | CourseResourceUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseResourceCreateManyCourseInputEnvelope
    set?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    disconnect?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    delete?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    connect?: CourseResourceWhereUniqueInput | CourseResourceWhereUniqueInput[]
    update?: CourseResourceUpdateWithWhereUniqueWithoutCourseInput | CourseResourceUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseResourceUpdateManyWithWhereWithoutCourseInput | CourseResourceUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseResourceScalarWhereInput | CourseResourceScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseCreateNestedOneWithoutCourseworkInput = {
    create?: XOR<CourseCreateWithoutCourseworkInput, CourseUncheckedCreateWithoutCourseworkInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseworkInput
    connect?: CourseWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutCourseworkInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutCourseworkInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CourseUpdateOneRequiredWithoutCourseworkNestedInput = {
    create?: XOR<CourseCreateWithoutCourseworkInput, CourseUncheckedCreateWithoutCourseworkInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseworkInput
    upsert?: CourseUpsertWithoutCourseworkInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseworkInput, CourseUpdateWithoutCourseworkInput>, CourseUncheckedUpdateWithoutCourseworkInput>
  }

  export type SubmissionUpdateManyWithoutCourseworkNestedInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutCourseworkInput | SubmissionUpsertWithWhereUniqueWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutCourseworkInput | SubmissionUpdateWithWhereUniqueWithoutCourseworkInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutCourseworkInput | SubmissionUpdateManyWithWhereWithoutCourseworkInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutCourseworkNestedInput = {
    create?: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput> | SubmissionCreateWithoutCourseworkInput[] | SubmissionUncheckedCreateWithoutCourseworkInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCourseworkInput | SubmissionCreateOrConnectWithoutCourseworkInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutCourseworkInput | SubmissionUpsertWithWhereUniqueWithoutCourseworkInput[]
    createMany?: SubmissionCreateManyCourseworkInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutCourseworkInput | SubmissionUpdateWithWhereUniqueWithoutCourseworkInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutCourseworkInput | SubmissionUpdateManyWithWhereWithoutCourseworkInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type CourseworkCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: CourseworkCreateOrConnectWithoutSubmissionsInput
    connect?: CourseworkWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseworkUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: CourseworkCreateOrConnectWithoutSubmissionsInput
    upsert?: CourseworkUpsertWithoutSubmissionsInput
    connect?: CourseworkWhereUniqueInput
    update?: XOR<XOR<CourseworkUpdateToOneWithWhereWithoutSubmissionsInput, CourseworkUpdateWithoutSubmissionsInput>, CourseworkUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type CourseCreateNestedOneWithoutResourcesInput = {
    create?: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutResourcesInput
    connect?: CourseWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutResourcesNestedInput = {
    create?: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutResourcesInput
    upsert?: CourseUpsertWithoutResourcesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutResourcesInput, CourseUpdateWithoutResourcesInput>, CourseUncheckedUpdateWithoutResourcesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CourseCreateWithoutTeacherInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    coursework?: CourseworkCreateNestedManyWithoutCourseInput
    resources?: CourseResourceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    coursework?: CourseworkUncheckedCreateNestedManyWithoutCourseInput
    resources?: CourseResourceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseCreateManyTeacherInputEnvelope = {
    data: CourseCreateManyTeacherInput | CourseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutStudentInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    coursework: CourseworkCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkId: string
  }

  export type SubmissionCreateOrConnectWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateManyStudentInputEnvelope = {
    data: SubmissionCreateManyStudentInput | SubmissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
  }

  export type CourseUpdateManyWithWhereWithoutTeacherInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    imageUrl?: StringNullableFilter<"Course"> | string | null
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    teacherId?: StringFilter<"Course"> | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    courseId?: StringFilter<"Enrollment"> | string
    studentId?: StringFilter<"Enrollment"> | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    content?: StringFilter<"Submission"> | string
    fileUrl?: StringNullableFilter<"Submission"> | string | null
    grade?: IntNullableFilter<"Submission"> | number | null
    feedback?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    courseworkId?: StringFilter<"Submission"> | string
    studentId?: StringFilter<"Submission"> | string
  }

  export type UserCreateWithoutTeacherCoursesInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTeacherCoursesInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTeacherCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherCoursesInput, UserUncheckedCreateWithoutTeacherCoursesInput>
  }

  export type EnrollmentCreateWithoutCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseworkCreateWithoutCourseInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutCourseworkInput
  }

  export type CourseworkCreateOrConnectWithoutCourseInput = {
    where: CourseworkWhereUniqueInput
    create: XOR<CourseworkCreateWithoutCourseInput, CourseworkUncheckedCreateWithoutCourseInput>
  }

  export type CourseworkCreateManyCourseInputEnvelope = {
    data: CourseworkCreateManyCourseInput | CourseworkCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseResourceCreateWithoutCourseInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseResourceUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseResourceCreateOrConnectWithoutCourseInput = {
    where: CourseResourceWhereUniqueInput
    create: XOR<CourseResourceCreateWithoutCourseInput, CourseResourceUncheckedCreateWithoutCourseInput>
  }

  export type CourseResourceCreateManyCourseInputEnvelope = {
    data: CourseResourceCreateManyCourseInput | CourseResourceCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeacherCoursesInput = {
    update: XOR<UserUpdateWithoutTeacherCoursesInput, UserUncheckedUpdateWithoutTeacherCoursesInput>
    create: XOR<UserCreateWithoutTeacherCoursesInput, UserUncheckedCreateWithoutTeacherCoursesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherCoursesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherCoursesInput, UserUncheckedUpdateWithoutTeacherCoursesInput>
  }

  export type UserUpdateWithoutTeacherCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseworkUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseworkWhereUniqueInput
    update: XOR<CourseworkUpdateWithoutCourseInput, CourseworkUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseworkCreateWithoutCourseInput, CourseworkUncheckedCreateWithoutCourseInput>
  }

  export type CourseworkUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseworkWhereUniqueInput
    data: XOR<CourseworkUpdateWithoutCourseInput, CourseworkUncheckedUpdateWithoutCourseInput>
  }

  export type CourseworkUpdateManyWithWhereWithoutCourseInput = {
    where: CourseworkScalarWhereInput
    data: XOR<CourseworkUpdateManyMutationInput, CourseworkUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseworkScalarWhereInput = {
    AND?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
    OR?: CourseworkScalarWhereInput[]
    NOT?: CourseworkScalarWhereInput | CourseworkScalarWhereInput[]
    id?: StringFilter<"Coursework"> | string
    title?: StringFilter<"Coursework"> | string
    description?: StringNullableFilter<"Coursework"> | string | null
    dueDate?: DateTimeNullableFilter<"Coursework"> | Date | string | null
    createdAt?: DateTimeFilter<"Coursework"> | Date | string
    updatedAt?: DateTimeFilter<"Coursework"> | Date | string
    courseId?: StringFilter<"Coursework"> | string
  }

  export type CourseResourceUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseResourceWhereUniqueInput
    update: XOR<CourseResourceUpdateWithoutCourseInput, CourseResourceUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseResourceCreateWithoutCourseInput, CourseResourceUncheckedCreateWithoutCourseInput>
  }

  export type CourseResourceUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseResourceWhereUniqueInput
    data: XOR<CourseResourceUpdateWithoutCourseInput, CourseResourceUncheckedUpdateWithoutCourseInput>
  }

  export type CourseResourceUpdateManyWithWhereWithoutCourseInput = {
    where: CourseResourceScalarWhereInput
    data: XOR<CourseResourceUpdateManyMutationInput, CourseResourceUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseResourceScalarWhereInput = {
    AND?: CourseResourceScalarWhereInput | CourseResourceScalarWhereInput[]
    OR?: CourseResourceScalarWhereInput[]
    NOT?: CourseResourceScalarWhereInput | CourseResourceScalarWhereInput[]
    id?: StringFilter<"CourseResource"> | string
    name?: StringFilter<"CourseResource"> | string
    description?: StringNullableFilter<"CourseResource"> | string | null
    fileUrl?: StringFilter<"CourseResource"> | string
    fileType?: StringFilter<"CourseResource"> | string
    fileSize?: IntFilter<"CourseResource"> | number
    createdAt?: DateTimeFilter<"CourseResource"> | Date | string
    updatedAt?: DateTimeFilter<"CourseResource"> | Date | string
    courseId?: StringFilter<"CourseResource"> | string
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherCoursesInput
    coursework?: CourseworkCreateNestedManyWithoutCourseInput
    resources?: CourseResourceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
    coursework?: CourseworkUncheckedCreateNestedManyWithoutCourseInput
    resources?: CourseResourceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherCourses?: CourseCreateNestedManyWithoutTeacherInput
    submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherCourses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherCoursesNestedInput
    coursework?: CourseworkUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    coursework?: CourseworkUncheckedUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherCourses?: CourseUpdateManyWithoutTeacherNestedInput
    submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherCourses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseCreateWithoutCourseworkInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    resources?: CourseResourceCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseworkInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    resources?: CourseResourceUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseworkInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseworkInput, CourseUncheckedCreateWithoutCourseworkInput>
  }

  export type SubmissionCreateWithoutCourseworkInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    student: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutCourseworkInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type SubmissionCreateOrConnectWithoutCourseworkInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput>
  }

  export type SubmissionCreateManyCourseworkInputEnvelope = {
    data: SubmissionCreateManyCourseworkInput | SubmissionCreateManyCourseworkInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutCourseworkInput = {
    update: XOR<CourseUpdateWithoutCourseworkInput, CourseUncheckedUpdateWithoutCourseworkInput>
    create: XOR<CourseCreateWithoutCourseworkInput, CourseUncheckedCreateWithoutCourseworkInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseworkInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseworkInput, CourseUncheckedUpdateWithoutCourseworkInput>
  }

  export type CourseUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutCourseworkInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutCourseworkInput, SubmissionUncheckedUpdateWithoutCourseworkInput>
    create: XOR<SubmissionCreateWithoutCourseworkInput, SubmissionUncheckedCreateWithoutCourseworkInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutCourseworkInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutCourseworkInput, SubmissionUncheckedUpdateWithoutCourseworkInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutCourseworkInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutCourseworkInput>
  }

  export type CourseworkCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCourseworkInput
  }

  export type CourseworkUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type CourseworkCreateOrConnectWithoutSubmissionsInput = {
    where: CourseworkWhereUniqueInput
    create: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherCourses?: CourseCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    full_name: string
    role: string
    avatar_url?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherCourses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type CourseworkUpsertWithoutSubmissionsInput = {
    update: XOR<CourseworkUpdateWithoutSubmissionsInput, CourseworkUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<CourseworkCreateWithoutSubmissionsInput, CourseworkUncheckedCreateWithoutSubmissionsInput>
    where?: CourseworkWhereInput
  }

  export type CourseworkUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: CourseworkWhereInput
    data: XOR<CourseworkUpdateWithoutSubmissionsInput, CourseworkUncheckedUpdateWithoutSubmissionsInput>
  }

  export type CourseworkUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherCourses?: CourseUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherCourses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseCreateWithoutResourcesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: UserCreateNestedOneWithoutTeacherCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    coursework?: CourseworkCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutResourcesInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherId: string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    coursework?: CourseworkUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutResourcesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
  }

  export type CourseUpsertWithoutResourcesInput = {
    update: XOR<CourseUpdateWithoutResourcesInput, CourseUncheckedUpdateWithoutResourcesInput>
    create: XOR<CourseCreateWithoutResourcesInput, CourseUncheckedCreateWithoutResourcesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutResourcesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutResourcesInput, CourseUncheckedUpdateWithoutResourcesInput>
  }

  export type CourseUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutTeacherCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    coursework?: CourseworkUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutResourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherId?: StringFieldUpdateOperationsInput | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    coursework?: CourseworkUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyTeacherInput = {
    id?: string
    title: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateManyStudentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courseId: string
  }

  export type SubmissionCreateManyStudentInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courseworkId: string
  }

  export type CourseUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    coursework?: CourseworkUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    coursework?: CourseworkUncheckedUpdateManyWithoutCourseNestedInput
    resources?: CourseResourceUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursework?: CourseworkUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courseworkId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type CourseworkCreateManyCourseInput = {
    id?: string
    title: string
    description?: string | null
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseResourceCreateManyCourseInput = {
    id?: string
    name: string
    description?: string | null
    fileUrl: string
    fileType: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseworkUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutCourseworkNestedInput
  }

  export type CourseworkUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseResourceUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseResourceUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseResourceUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyCourseworkInput = {
    id?: string
    content: string
    fileUrl?: string | null
    grade?: number | null
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentId: string
  }

  export type SubmissionUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutCourseworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}