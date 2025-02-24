import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { schema } from "@/lib/schema";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Edit, Trash2 } from "lucide-react";

const adminLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type AdminLoginForm = z.infer<typeof adminLoginSchema>;
type BlogPostForm = z.infer<typeof schema.blogPostSchema>;
type FavoriteItemForm = z.infer<typeof schema.favoriteItemSchema>;
type Favorite = z.infer<typeof schema.favoriteItemSchema> & { id: number };

export function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editingFavorite, setEditingFavorite] = useState<Favorite | null>(null);
  const { toast } = useToast();

  const loginForm = useForm<AdminLoginForm>({
    resolver: zodResolver(adminLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const blogPostForm = useForm<BlogPostForm>({
    resolver: zodResolver(schema.blogPostSchema),
    defaultValues: {
      title: "",
      content: "",
      slug: "",
      excerpt: "",
      featuredImage: "",
    },
  });

  const favoriteForm = useForm<FavoriteItemForm>({
    resolver: zodResolver(schema.favoriteItemSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "tools",
      type: "",
      hyperlink: "",
      metadata: {},
    },
  });

  const { data: posts } = useQuery({
    queryKey: ["/api/posts"],
    enabled: isLoggedIn,
  });

  const { data: favorites, isLoading: favoritesLoading } = useQuery({
    queryKey: ["/api/favorites"],
    enabled: isLoggedIn,
  });

  const createPost = useMutation({
    mutationFn: async (data: BlogPostForm) => {
      await apiRequest("POST", "/api/posts", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      blogPostForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const createFavorite = useMutation({
    mutationFn: async (data: FavoriteItemForm) => {
      await apiRequest("POST", "/api/favorites", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/favorites"] });
      toast({
        title: "Success",
        description: "Favorite item added successfully",
      });
      favoriteForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateFavorite = useMutation({
    mutationFn: async (data: FavoriteItemForm & { id: number }) => {
      const { id, ...favoriteData } = data;
      await apiRequest("PATCH", `/api/favorites/${id}`, favoriteData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/favorites"] });
      toast({
        title: "Success",
        description: "Favorite item updated successfully",
      });
      setEditingFavorite(null);
      favoriteForm.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteFavorite = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/favorites/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/favorites"] });
      toast({
        title: "Success",
        description: "Favorite item deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onLoginSubmit = async (data: AdminLoginForm) => {
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        toast({
          title: "Success",
          description: "Logged in successfully",
        });
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to login",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (favorite: Favorite) => {
    setEditingFavorite(favorite);
    favoriteForm.reset({
      name: favorite.name,
      description: favorite.description,
      category: favorite.category,
      type: favorite.type,
      hyperlink: favorite.hyperlink || "",
      metadata: favorite.metadata || {},
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tinymceInit = {
    height: 500,
    menubar: true,
    apiKey: import.meta.env.VITE_TINYMCE_API_KEY,
    plugins: [
      // Core editing features
      'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media',
      'searchreplace', 'table', 'visualblocks', 'wordcount',
      // Premium features
      'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker',
      'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage',
      'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags',
      'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
    ],
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | ' +
      'link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | ' +
      'align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Admin',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ],
    branding: false,
    promotion: false,
    setup: (editor) => {
      editor.on('init', () => {
        console.log('TinyMCE initialized with API key:', import.meta.env.VITE_TINYMCE_API_KEY);
      });
    }
  };

  if (!isLoggedIn) {
    return (
      <Card className="w-[400px] mx-auto mt-8">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
              <FormField
                control={loginForm.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Login</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
          Logout
        </Button>
      </div>

      <Tabs defaultValue="favorites" className="space-y-6">
        <TabsList className="w-full">
          <TabsTrigger value="favorites" className="flex-1">Favorites</TabsTrigger>
          <TabsTrigger value="blog" className="flex-1">Blog Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="favorites">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingFavorite ? "Edit Favorite" : "Add Favorite"}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...favoriteForm}>
                <form
                  onSubmit={favoriteForm.handleSubmit((data) => {
                    if (editingFavorite) {
                      updateFavorite.mutate({ ...data, id: editingFavorite.id });
                    } else {
                      createFavorite.mutate(data);
                    }
                  })}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={favoriteForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={favoriteForm.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="tools">Tools</SelectItem>
                              <SelectItem value="products">Products</SelectItem>
                              <SelectItem value="books">Books</SelectItem>
                              <SelectItem value="people">People</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={favoriteForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={favoriteForm.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="e.g., Development, Audio, Psychology" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={favoriteForm.control}
                      name="hyperlink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Hyperlink</FormLabel>
                          <FormControl>
                            <Input {...field} type="url" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="submit"
                      disabled={createFavorite.isPending || updateFavorite.isPending}
                    >
                      {editingFavorite
                        ? updateFavorite.isPending ? "Updating..." : "Update Favorite"
                        : createFavorite.isPending ? "Adding..." : "Add Favorite"
                      }
                    </Button>
                    {editingFavorite && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setEditingFavorite(null);
                          favoriteForm.reset();
                        }}
                      >
                        Cancel Edit
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Existing Favorites</CardTitle>
            </CardHeader>
            <CardContent>
              {favoritesLoading ? (
                <div>Loading favorites...</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {favorites?.map((favorite: Favorite) => (
                      <TableRow key={favorite.id}>
                        <TableCell>{favorite.name}</TableCell>
                        <TableCell>{favorite.category}</TableCell>
                        <TableCell>{favorite.type}</TableCell>
                        <TableCell className="max-w-[300px] truncate">
                          {favorite.description}
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(favorite)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Favorite</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete "{favorite.name}"? This action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => deleteFavorite.mutate(favorite.id)}
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blog">
          <Card>
            <CardHeader>
              <CardTitle>Create Blog Post</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...blogPostForm}>
                <form onSubmit={blogPostForm.handleSubmit((data) => createPost.mutate(data))} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={blogPostForm.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={blogPostForm.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Slug</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={blogPostForm.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Editor
                            apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                            init={tinymceInit}
                            value={field.value}
                            onEditorChange={(content) => field.onChange(content)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={blogPostForm.control}
                      name="featuredImage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Featured Image URL</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={blogPostForm.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Excerpt</FormLabel>
                          <FormControl>
                            <Textarea {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button type="submit" disabled={createPost.isPending}>
                    {createPost.isPending ? "Creating..." : "Create Post"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}